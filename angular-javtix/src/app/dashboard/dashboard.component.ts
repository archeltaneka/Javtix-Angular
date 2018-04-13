import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllService } from '../all.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AllService) { }
  
  name: any;
  userId: any;
  email: any;
  phoneNumber: any;
  preferredCinema: any;
  gender: any;
  birthDate: any;
  city: any;

  ngOnInit() {
  	this.name = localStorage.getItem('name');
  	// console.log(this.name);
  	this.userId = localStorage.getItem('id');
  	// console.log(this.userId);
  	this.email = localStorage.getItem('email');
  	// console.log(this.email);
  	this.phoneNumber = localStorage.getItem('phoneNumber');
  	// console.log(this.phoneNumber);
  	this.gender = localStorage.getItem('gender');
  	// console.log(this.gender);
  	this.birthDate = localStorage.getItem('birthDate');
  	// console.log(this.birthDate);
  	this.city = localStorage.getItem('city');
  	// console.log(this.city);
  }


}
