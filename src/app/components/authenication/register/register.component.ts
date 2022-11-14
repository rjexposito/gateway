import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;

  constructor() { 
    this.email = '';
    this.password = '';
    this.confirmPassword = '';

  }

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
    });
  }
}
