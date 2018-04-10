import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

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

  movieInfo: Array<any>;
  error: string;

  ngOnInit() {
  	this.route.params.subscribe(res=>{
  		this.http.get(`http://localhost:8000/api/movie/${res['id']}`).subscribe(res2=>{
  			this.mov = res2;
  			console.log(this.mov);
  		})
  	})

  	this.service.getAllSchedules().subscribe(
  		info => {
  			this.movieInfo = info;
  			console.log(info);
  		},
  		error => {
  			this.error = error.statusText;
  		}
  	);
  }
  
}
