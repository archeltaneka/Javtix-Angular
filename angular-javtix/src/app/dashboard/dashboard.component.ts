import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllService } from '../all.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @Input() name: any = {};
  email: any = {};
  phoneNumber: any = {};
  preferredCinema: any = {};
  gender: any = {};
  birthDate: any = {};
  city: any = {};

  constructor(private service: AllService) { }

  ngOnInit() {
  	this.preferredCinema = localStorage.getItem('preferredCinema');
  	this.name = localStorage.getItem('name');
  	this.email = localStorage.getItem('email');
  	this.phoneNumber = localStorage.getItem('phoneNumber');
  	this.gender = localStorage.getItem('gender');
  	this.birthDate = localStorage.getItem('birthDate');
  	this.city = localStorage.getItem('city');
  }

}
