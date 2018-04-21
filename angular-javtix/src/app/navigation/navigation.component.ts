import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedIn: any = false;

  constructor() { }

  ngOnInit() {
  	this.loggedIn = localStorage.getItem('response') ? true : false;
  }

  logout() {
  	window.location.href="/user";
  	localStorage.clear();
  }

}
