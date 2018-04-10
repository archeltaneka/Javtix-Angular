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

  movies: any = {};
  error: string;

  ngOnInit() {
  	this.service.getAllMovies().subscribe(
  		datas => {
  			this.movies = datas;
  			console.log(datas);
  		},
  		error => {
  			this.error = error.statusText
		}
  	);
  }

  viewMovieInfo(mid: any) {
  	console.log(mid);
  	this.router.navigate([`/movie/${mid}`]);
  }

}
