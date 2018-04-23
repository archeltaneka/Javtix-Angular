import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { Signup } from './signup';
import { Signin } from './signin';
import { Cities } from './cities';
import { Movies } from './movies';
import { Profile } from './profile';
import { Transactions } from './transactions';
import { creditCards } from './creditCards';

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

  /* REST API */
  
  signUpService(signup: Signup) {
  	let url = 'https://api.javtix.me/api/register';
  	this.httpClient.post(url, signup, this.header).subscribe(
  		res => console.log("Register success!"),
  		err => console.log(err.error)
  	);
  }

  signinService(signin: Signin) {
  	let response: any = {};
  	let url = 'https://api.javtix.me/api/login';

  	return this.httpClient.post(url, signin, this.header).map(
  		res=> {
	  		response = res;
	  		// console.log(response);

	  		localStorage.setItem('response', JSON.stringify(response));
        // localStorage.setItem('success', JSON.stringify(response['success']));
        console.log(localStorage.getItem('success'));
        this.token = response['data']['success'];
	  		this.name = response['data']['user']['name'];
	  		this.userId = response['data']['user']['id'];

        localStorage.setItem('success', this.token);
	  		localStorage.setItem('name', this.name);
	  		localStorage.setItem('id', this.userId);
  		},
  		err=> {
  			let error = err.error;
  			console.log(error);
  		});
  }

  buyTicket(transaction: any) {
    let response: any = {};
    let url = 'https://api.javtix.me/api/purchases';

    return this.httpClient.post(url, transaction, this.header).map(
      res => {
        response = res;
        console.log(response);
      },
      err => console.log(err.error)
    );
  }

  getProfile(id:string) {
    let url = 'https://api.javtix.me/api/customer/'+id;

    return this.httpClient.get(url, this.header);
  }

  updateProfile(profile: Profile) {
  	let url = 'https://api.javtix.me/api/customer/' + profile.id;
    console.log(profile);
  	return this.httpClient.put(url, profile, this.header);
  }

  getAllSchedules() {
  	return this.http.get('https://api.javtix.me/api/schedule').map(res=>res.json());
  }

  getAllCinemas() {
  	return this.http.get('https://api.javtix.me/api/cinema').map(res=>res.json());
  }

  getAllNowPlayingMovies() {
    return this.http.get('https://api.javtix.me/api/movie/nowplaying').map(res=>res.json());
  }

  getAllComingSoonMovies() {
  	return this.http.get('https://api.javtix.me/api/movie/comingsoon').map(res=>res.json());
  }

  getMovieFromSearch(mov: any) {
  	return this.http.get('https://api.javtix.me/api/movie/' + mov.id).map(res=>res.json());
  }

  getAllCities() {
  	return this.http.get('https://api.javtix.me/api/city').map(res=>res.json());
  }

  getAllSeats(tid: any) {
    return this.http.get('https://api.javtix.me/api/all_seats/' + tid.id).map(res=>res.json());
  }

  getAllPromos() {
    return this.http.get('https://api.javtix.me/api/promo').map(res=>res.json());
  }

  getPrice() {
    return this.http.get('https://api.javtix.me/api/pricing').map(res=>res.json());
  }

  getPromoValue(pid) {
    return this.http.get('https://api.javtix.me/api/promoval/' + pid).map(res=>res.json());
  }

}
