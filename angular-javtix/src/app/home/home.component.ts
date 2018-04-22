import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllService } from '../all.service';
import { HttpClient } from '@angular/common/http';

import { Movies } from '../Movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private service: AllService, private router: Router) { }

  nowPlayingMovies: Array<any>;
  comingSoonMovies: Array<any>;
  allCities: Array<any>;
  error: string;

  movieSearchData: any = {};
  movieSearchError: string;

  selectedMovie = "6fb7fdba-5c31-4b5a-a06f-1cc3773b13c4";
  selectedCity = "Jakarta";

  ngOnInit() {
  	this.service.getAllNowPlayingMovies().subscribe(
  		datas => {
  			this.nowPlayingMovies = datas;
  			console.log(datas);
  		},
  		error => {
  			this.error = error.statusText
		}
  	);
    this.service.getAllComingSoonMovies().subscribe(
      datas => this.comingSoonMovies = datas,
      error => console.log(error)
    );
    this.service.getAllCities().subscribe(
      datas => this.allCities = datas,
      error => console.log(error)
     );
  }

  viewMovieInfo(mid: any) {
  	console.log(mid);
  	this.router.navigate([`/movie/${mid}`]);
  }

  changeMovie(e) {
    this.selectedMovie = e.target.value;
  }

  changeCity(e) {
    this.selectedCity = e.target.value;
  }

  // search movie and schedule based on search functionality
  search() {
    console.log(this.selectedMovie);
    console.log(this.selectedCity);
    this.router.navigate([`/movie/${this.selectedMovie}/${this.selectedCity}`]);
  }

  // if user does not use the search function, the movie schedule will be automatically based on Jakarta
  movieClick(mid: any) {
    console.log(mid);
    this.router.navigate([`/movie/${mid}/Jakarta`]);
  }

}
