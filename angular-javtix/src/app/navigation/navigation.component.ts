import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedIn: boolean = false;

  constructor() { }

  ngOnInit() {
  	this.loggedIn = JSON.parse(localStorage.getItem('response')).data.token ? true : false;
  }

  logout() {
  	window.location.href="/home";
  	localStorage.clear();
  }

}
