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

  token: any;
  userId: any;
  name: any;
  email: any;
  phoneNumber: any;
  preferredCinema: any;
  gender: any;
  birthDate: any;
  city: any;

  citiesResponse: any = {};
  schedulesResponse: any = {};
  cinemasResponse: any = {};
  movieInfoResponse: any = {};

  header = {
  	headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: Http, private httpClient: HttpClient, private router: Router) { }

  signUpService(signup: Signup) {
  	let url = 'http://localhost:8000/api/register';
  	this.httpClient.post(url, signup, this.header).subscribe(
  		res => console.log("Register success!"),
  		err => console.log(err.error)
  	);
  }

  signinService(signin: Signin) {
  	let response: any = {};
  	let url = 'http://localhost:8000/api/login';

  	return this.httpClient.post(url, signin, this.header).map(
  		res=> {
	  		response = res;
	  		console.log(response);

	  		localStorage.setItem('response', JSON.stringify(response));
	  		this.name = response['data']['user']['name'];
	  		this.userId = response['data']['user']['id'];
	  		this.email = response['data']['user']['email'];
	  		this.phoneNumber = response['data']['user']['phone_number'];
	  		this.gender = response['data']['user']['gender'];
	  		this.birthDate = response['data']['user']['birth_date'];
	  		this.city = response['data']['user']['city'];

	  		localStorage.setItem('name', this.name);
	  		localStorage.setItem('id', this.userId);
	  		localStorage.setItem('email', this.email);
	  		localStorage.setItem('phoneNumber', this.phoneNumber);
	  		localStorage.setItem('gender', this.gender);
	  		localStorage.setItem('birthDate', this.birthDate);
	  		localStorage.setItem('city', this.city);
  		},
  		err=> {
  			let error = err.error;
  			console.log(error);
  		});
  }

  updateProfile() {
  	
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

  getMovieFromSearch(mov: any) {
  	return this.http.get('https://localhost:8000/api/movie/' + mov.id).map(res=>res.json());
  }

  getAllCities() {
  	return this.http.get('http://localhost:8000/api/cinema').map(res=>res.json());
  }

  transaction() {
  	let url = 'http://localhost:8000/api/transaction';
  }

}
