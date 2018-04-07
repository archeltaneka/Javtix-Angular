import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signup } from './signup';
import { Signin } from './signin';
import { Cities } from './cities';
import { Movies } from './movies';

import 'rxjs/add/operator/map';

@Injectable()
export class AllService {

  token: any = {};
  name: any = {};
  email: any = {};
  phoneNumber: any = {};

  citiesResponse: any = {};
  schedulesResponse: any = {};

  constructor(private http: HttpClient) { }

  signUpService(signup: Signup) {
  	let url = 'http://localhost:8000/api/user';
  	return this.http.post(url, signup).map(res=>res);
  }

  signinService(signin: Signin) {
  	let response: any = {};
  	let url = 'http://localhost:8000/api/...';

  	return this.http.post(url, signin).map(res=> {
  		console.log(res);
  		response = res;

  		localStorage.setItem('response', JSON.stringify(response));
  		this.token = JSON.parse(localStorage.getItem('response')).data.token;
  		this.name = JSON.parse(localStorage.getItem('response')).data.user["0"].name;
  		this.email = JSON.parse(localStorage.getItem('response')).data.user["0"].email;
  		this.phoneNumber = JSON.parse(localStorage.getItem('response')).data.user["0"].phoneNumber;

  		localStorage.setItem('name', this.name);
  		localStorage.setItem('email', this.email);
  		localStorage.setItem('phoneNumber', this.phoneNumber);

  		console.log(localStorage['token']);
  	})
  }

  getAllCities() {
  	return this.http.get('http://localhost:8000/api/...').map(res=>{
  		console.log(res);

  		this.citiesResponse = res;
  		localStorage.setItem('citiesResponse', JSON.stringify(this.citiesResponse));
  	})
  }

  getAllSchedules(mov: Movies, city: Cities) {
  	return this.http.get('http://localhost:8000/api/...').map(res=> {
  		console.log(res);

  		this.schedulesResponse = res;
  		localStorage.setItem('schedulesResponse', JSON.stringify(this.schedulesResponse));
  	})
  }



}
