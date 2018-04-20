import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { AllService } from '../all.service';
import { Signup } from '../signup';
import { Signin } from '../signin';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AllService]
})
export class UserComponent implements OnInit {

  constructor(private http: Http, private allService: AllService) { }

  cinemaData: Array<any>;
  error: string;

  cityData: Array<any>;
  cityError: string;

  signup: any = {};
  response: Object = [];
  signUpFlag: boolean;
  test: any;

  public model: any = {};
  signInFlag: boolean;


  register() {
  	this.allService.signUpService(this.signup);
  	console.log(this.signup);
  	alert("Register success! Please check your email for verification");
  }

  login() {
  	this.allService.signinService(this.model).subscribe(
  		res => {
  			console.log('Login success');
  			this.signInFlag = true;
  			setTimeout(() => window.location.href="/dashboard", 2000);
  		},
  		err => console.log(err.Error)
  	);
  }

  ngOnInit() {
  	this.signup = new Signup();
  	this.model = new Signin();

  	this.allService.getAllCinemas().subscribe(
  		datas => {
        this.cinemaData = datas
        console.log(this.cinemaData);
      },
  		error => this.error = error.statusText
  	);

  	this.allService.getAllCities().subscribe(
  		cities => {
        this.cityData = cities,
        console.log(this.cityData)
      },
  		error => this.cityError = error.statusText
  	);
  }

}
