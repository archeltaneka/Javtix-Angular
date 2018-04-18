import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { Transactions } from './../transactions';

import { Movies } from '../Movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private http: HttpClient, private service: AllService, private route: ActivatedRoute, private router: Router) { }

  mov: any = {};
  tid: any;

  movieInfo: any = {};
  error: string;

  lstOfTheatre: any = [];
  lstOfTime: any = [];
  lstOfSeats: any = [];
  lstOfPromos: any = {};

  selectedTheatre : any;
  selectedTime : any;
  selectedSeat : any;
  selectedPromo: any;

  id1: any;
  id2: any;

  ngOnInit() {
  	this.route.params.subscribe(res=>{
      //get movie info
  		this.http.get(`http://localhost:8000/api/movie?id=${res['id']}`).subscribe(res2=>{
  			this.mov = res2;
  		})
      //get schedule
      this.http.get(`http://localhost:8000/api/schedule?id=${res['id']}&city=${res['city']}`).subscribe(res3=>{
        this.movieInfo = res3;
        for(let t of this.movieInfo){
          if(this.lstOfTheatre.indexOf(t['cinemas'])==-1){
             this.lstOfTheatre.push(t['cinemas']);
          }
        }
      },
      error=>{
        this.error = error.statusText;
      });
  	});
    this.service.getAllPromos().subscribe(
      all=>{
        this.lstOfPromos = all;
        console.log(this.lstOfPromos);
      },
      err=>console.log(err.error)
    );
  }

  purchase() {
    let paymentInfo: any = {};
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_18fkuvplx0UaWxpA8IOObWP2',
      locale: 'auto',
      token: function (token: any) {
        paymentInfo.tokenId = token.id;
        paymentInfo.email = token.email;
        paymentInfo.userId = localStorage.getItem('id');
        // paymentInfo['scheduleId'] = this.id1;
        // paymentInfo['seatId'] = this.selectedSeat;
        paymentInfo.qty = 1;
        // paymentInfo['promoId'] = this.selectedPromo;
        console.log(paymentInfo);
        this.service.buyTicket(paymentInfo).subscribe(
          res => console.log(res),
          err => console.log(err.error)
        );
      }
    });
    handler.open({
      name: 'Javtix',
      description: 'Payment',
      amount: 2000
    });

    paymentInfo.scheduleId = this.id1;
    paymentInfo.seatId = this.selectedSeat;
    paymentInfo.totalPrice = 10000;
    paymentInfo.promoId = this.selectedPromo;

    // console.log(paymentInfo);

    // this.service.buyTicket(paymentInfo).subscribe(
    //   res => console.log(res),
    //   err => console.log(err.error)
    // );
  }

  selectTheatre(e){
    this.selectedTheatre = e.target.value;
    for(let t of this.movieInfo){
      if(t['cinemas']==e.target.value){
        this.lstOfTime.push(t['time']);
      }
    }
  }

  selectTime(e){
    this.selectedTime = e.target.value;
    // let id1,id2;
    for(let t of this.movieInfo){
       if(t['time']==this.selectedTime && t['cinemas']==this.selectedTheatre){
         this.id2 = t['theatre_id'];
         this.id1 = t['id'];
         break;
       }
    }
    this.http.get(`http://localhost:8000/api/availableSeat?schedule_id=${this.id1}&theatre_id=${this.id2}`).subscribe(
      res=>{
        this.selectedSeat = res;
        console.log(res);
      }
    );
  }

  selectSeat(e) {
    this.selectedSeat = e.target.value;
    console.log(this.selectedSeat);
  }

  selectPromo(e) {
    this.selectedPromo = e.target.value;
  }

}
