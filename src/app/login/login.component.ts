import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  login(){
    if(this.email=="test.1@gmail.com" && this.password == "password"){
      this.router.navigateByUrl('/account');
    }else if(this.email=="test.2@gmail.com" && this.password == "password2"){
      this.router.navigateByUrl('/account');
    }else if(this.email=="test.3@gmail.com" && this.password == "password3"){
      this.router.navigateByUrl('/account');
    }else{
      alert("Email Or Password Incorrect!");
    }
  }

}
