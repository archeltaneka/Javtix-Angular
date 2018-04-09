import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { AllService } from '../all.service';
import { Signup } from '../signup';
import { Signin } from '../signin';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AllService]
})
export class UserComponent implements OnInit {

  constructor(private allService: AllService) { }

  private tabbed(evt, tab) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }

  cinemaData: Array<any>;
  error: string;

  @Input() signup: Signup;
  response: Object = [];
  signUpFlag: boolean;

  @Input() signin: Signin;
  signInFlag: boolean;

  register() {
  	this.allService.signUpService(this.signup).subscribe(
  		data => console.log(this.response = data),
  		err => console.log(err),
  		() => console.log('Sign up success!')
  	);
  	this.signUpFlag = true;
  	setTimeout(() => window.location.href = "", 3600);
  }

  login() {
  	this.allService.signinService(this.signin).subscribe(
  		() => console.log('Login success!')
  	);
  	this.signInFlag = true;
  	setTimeout(() => window.location.href = "/dashboard", 3600);
  }

  ngOnInit() {
  	this.signup = new Signup();
  	this.signin = new Signin();

  	this.allService.getAllCinemas().subscribe(
  		datas => this.cinemaData = datas,
  		error => this.error = error.statusText
    );
    
    this.tabbed(event, 'LogIn');
  }

}
