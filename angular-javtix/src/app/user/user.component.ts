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

  signin: any = {};
  signInFlag: boolean;

  public model: any = {};


  register(data: any) {
  	console.log(data);
  	this.allService.signUpService(data).subscribe(
  		data => console.log(this.response = data),
  		err => alert(err),
  		() => alert('Sign up success! Please check your email for verification')
  	);
  	this.signUpFlag = true;
  	setTimeout(() => window.location.href = "", 3600);
  }

  login() {
  	this.allService.signinService(this.model);
  }

  ngOnInit() {
  	this.signup = new Signup();
  	this.signin = new Signin();

  	this.allService.getAllCinemas().subscribe(
  		datas => this.cinemaData = datas,
  		error => this.error = error.statusText
  	);

  	this.allService.getAllCinemas().subscribe(
  		cities => this.cityData = cities,
  		error => this.cityError = error.statusText
  	);
  }

}
