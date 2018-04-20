import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UserResponse {
	user_id: number;
	user_name: string;
	user_email: string;  
	user_password: string;	
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor() { }
  
}
