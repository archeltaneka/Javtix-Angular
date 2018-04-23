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
  
  model: any = [];
  userData: any = {};

  historyInfo: any = {};

  ngOnInit() {
  	this.showProfile();
    this.showPurchases();
  }

  showProfile() {
    this.service.getProfile(localStorage.getItem('id')).subscribe(
      res=>{
        this.model.name = res[0]["name"];
        this.model.email = res[0]["email"];
        this.model.phoneNumber = res[0]["phone_number"];
        this.model.gender = res[0]["gender"];
        this.model.birthDate = res[0]["birth_date"];
        this.model.city = res[0]["city"];
        this.model.id = localStorage.getItem('id');
      },
      err=>console.log(localStorage.getItem('id'))
    );
  }

  save() {
    console.log(this.model);
    this.service.updateProfile(this.model).subscribe(
      res=>{
        alert('Profile successfully saved!');
        this.showProfile();
      },
      err=>console.log(err.error)
    );
  }

  showPurchases() {
    this.service.getHistory(localStorage.getItem('id')).subscribe(
      res=> {
        this.historyInfo = res;
        console.log(this.historyInfo);
      },
      err=> console.log(err.error)
    );
  }

}
