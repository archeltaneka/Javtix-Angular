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
  paymentInfo: any = {};

  lstOfTheatre: any = [];
  lstOfTime: any = [];
  lstOfSeats: any = [];
  lstOfPromos: any = {};

  selectedTheatre : any;
  selectedTime : any;
  selectedSeat : any;
  selectedPromo: any;
  promoVal: any = {};

  id1: any;
  id2: any;

  loggedIn: any = false;

  ngOnInit() {
    this.loggedIn = localStorage.getItem('success') ? true : false;

  	this.route.params.subscribe(res=>{
      //get movie info
  		this.http.get(`https://api.javtix.me/api/movie?id=${res['id']}`).subscribe(res2=>{
  			this.mov = res2;
  		})
      //get schedule depends on movie and city selected
      this.http.get(`https://api.javtix.me/api/schedule?id=${res['id']}&city=${res['city']}`).subscribe(res3=>{
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
    //get all promo available
    this.service.getAllPromos().subscribe(
      all=>{
        this.lstOfPromos = all;
        console.log(this.lstOfPromos);
      },
      err=>console.log(err.error)
    );
  }

  // fake(unanonymous function) for stripe checkout
  faker(tokens : any) {
      this.paymentInfo['stripeToken'] = tokens.id;
      this.paymentInfo.stripeEmail = tokens.email;
      this.paymentInfo.user_id = localStorage.getItem('id');
      this.paymentInfo.stripeTokenType = 'card';
      console.log(this.paymentInfo);
      window.setTimeout(function(){ window.location.href='/home'; }, 3600);

      this.service.buyTicket(this.paymentInfo).subscribe(
        res=>{
          console.log(res);
         },
        err=>console.log(err.error)
      );
    }

  // function upon clicking submit button for payment
  purchase() {
    var flag: boolean;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_18fkuvplx0UaWxpA8IOObWP2',
      locale: 'auto',
      token: this.faker.bind(this),
    });
    handler.open({
      name: 'Javtix',
      description: 'Payment',
      amount: this.pricingInfo[0].weekday_price - this.promoVal[0].value
    });


    this.paymentInfo.schedule_id = this.id1;
    this.paymentInfo.seat_id = this.selectedSeat;
    this.paymentInfo.quantity = 1;
    this.paymentInfo.total_price = this.pricingInfo[0].weekday_price - this.promoVal[0].value;
    this.paymentInfo.promo_id = this.selectedPromo;

    console.log(this.paymentInfo.total_price);
  }

  // after selecting the theatre, the time also will be shown corresponding to the selected theatre
  selectTheatre(e){
    this.selectedTheatre = e.target.value;
    for(let t of this.movieInfo){
      if(t['cinemas']==e.target.value){
        this.lstOfTime.push(t['time']);
      }
    }
  }

  // seats will be also shown corresponding to the schedule/time selected
  selectTime(e){
    this.selectedTime = e.target.value;
    for(let t of this.movieInfo){
       if(t['time']==this.selectedTime && t['cinemas']==this.selectedTheatre){
         this.id2 = t['theatre_id'];
         this.id1 = t['id'];
         break;
       }
    }
    this.http.get(`https://api.javtix.me/api/availableSeat?schedule_id=${this.id1}&theatre_id=${this.id2}`).subscribe(
      res=>{
        this.selectedSeat = res;
        console.log(this.selectedSeat);
      }
    );
  }

  // get the id of the seat
  selectSeat(e) {
    this.selectedSeat = e.target.value;
    console.log(this.selectedSeat);
    this.http.get(`https://api.javtix.me/api/pricing?id=${this.selectedSeat}`).subscribe(
      res=>{
        this.pricingInfo = res;
        console.log(this.pricingInfo[0].weekday_price);
      },
      err=>console.log(err.error)
    );
  }

  // get the value of the promo
  selectPromo(e) {
    this.selectedPromo = e.target.value;
    this.service.getPromoValue(this.selectedPromo).subscribe(
      res=>{
        this.promoVal = res;
        // console.log(this.promoVal);
      },
      err=>console.log(err.error)
    );
  }

}
