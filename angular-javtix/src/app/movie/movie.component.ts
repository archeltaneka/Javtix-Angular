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

  pricingInfo: any = {};
  paymentInfo: any = {'stripeToken':'iyt' };

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

  faker(tokens : any) {
      this.paymentInfo['stripeToken'] = tokens.id;
      this.paymentInfo.stripeEmail = tokens.email;
      this.paymentInfo.user_id = localStorage.getItem('id');
      this.paymentInfo.stripeTokenType = 'card';

      this.service.buyTicket(this.paymentInfo).subscribe(
        res=>{
          console.log(res);

        },
        err=>console.log(err.error)
      );
    }

  purchase() {
    var flag: boolean;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_18fkuvplx0UaWxpA8IOObWP2',
      locale: 'auto',
      token: this.faker.bind(this)
    });
    handler.open({
      name: 'Javtix',
      description: 'Payment',
      amount: this.pricingInfo[0].weekday_price
    });
    window.addEventListener("popstate", function() {
      handler.close();
      window.location.href='/home';
    });

    this.paymentInfo.schedule_id = this.id1;
    this.paymentInfo.seat_id = this.selectedSeat;
    this.paymentInfo.quantity = 1;
    this.paymentInfo.total_price = this.pricingInfo[0].weekday_price;
    this.paymentInfo.promo_id = this.selectedPromo;

    // console.log(paymentInfo);
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
        console.log(this.selectedSeat);
      }
    );
  }

  selectSeat(e) {
    this.selectedSeat = e.target.value;
    console.log(this.selectedSeat);
    this.http.get(`http://localhost:8000/api/pricing?id=${this.selectedSeat}`).subscribe(
      res=>{
        this.pricingInfo = res;
        console.log(this.pricingInfo[0].weekday_price);
      },
      err=>console.log(err.error)
    );
  }

  selectPromo(e) {
    this.selectedPromo = e.target.value;
  }

}
