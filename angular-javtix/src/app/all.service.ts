import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { Signup } from './signup';
import { Signin } from './signin';
import { Cities } from './cities';
import { Movies } from './movies';

import 'rxjs/add/operator/map';

@Injectable()
export class AllService {

  token: any = {};
  data: any = {};
  name: any = {};
  email: any = {};
  phoneNumber: any = {};

  citiesResponse: any = {};
  schedulesResponse: any = {};
  cinemasResponse: any = {};
  movieInfoResponse: any = {};

  header = {
  	headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: Http, private httpClient: HttpClient, private router: Router) { }

  signUpService(signup: Signup) {
  	let url = 'http://localhost:8000/api/user';
  	return this.http.post(url, signup).map(res=>res);
  }

  signinService(signin: Signin) {
  	let response: any = {};
  	let url = 'http://localhost:8000/api/user';

  	return this.httpClient.post<any>(url, signin, this.header).subscribe(
  		res => {
  			console.log(res);
  			this.data = res;
  			this.name = JSON.parse(atob(this.data.access_token.split('.')[1])).name;

  			localStorage.setItem('token', this.data.access_token);
  			localStorage.setItem('name', this.name);

  			this.router.navigate(['/dashboard']);
  		},
  		err => {
  			let error = err.error;
  			console.log(error);
  		},
  		() => alert('Welcome back!')
  		);

  	// return this.http.post(url, signin).map(res=> {
  	// 	console.log(res);
  	// 	response = res;

  	// 	localStorage.setItem('response', JSON.stringify(response));
  	// 	this.token = JSON.parse(localStorage.getItem('response')).data.token;
  	// 	this.name = JSON.parse(localStorage.getItem('response')).data.user["0"].name;
  	// 	this.email = JSON.parse(localStorage.getItem('response')).data.user["0"].email;
  	// 	this.phoneNumber = JSON.parse(localStorage.getItem('response')).data.user["0"].phoneNumber;

  	// 	localStorage.setItem('name', this.name);
  	// 	localStorage.setItem('email', this.email);
  	// 	localStorage.setItem('phoneNumber', this.phoneNumber);

  	// 	console.log(localStorage['token']);
  	// })
  }

  getAllSchedules() {
  	return this.http.get('http://localhost:8000/api/schedule').map(res=>res.json());
  }

  getAllCinemas() {
  	return this.http.get('http://localhost:8000/api/cinema').map(res=>res.json());
  }

  getAllMovies() {
  	return this.http.get('http://localhost:8000/api/movie').map(res=>res.json());
  }

  getAllCities() {
  	return this.http.get('http://localhost:8000/api/cinema').map(res=>res.json());
  }

}
