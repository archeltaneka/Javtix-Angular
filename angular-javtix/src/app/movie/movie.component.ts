import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { HttpClient } from '@angular/common/http';

import { Movies } from '../Movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private http: HttpClient, private service: AllService) { }

  mov: Movies;
  tid: any;

  informations: Array<any>;
  error: string;

  ngOnInit() {
  	this.mov.movieId = JSON.parse(localStorage.getItem('movieInfoResponse'));
  	this.service.getMovieInfo(this.mov).subscribe();
  }

}
