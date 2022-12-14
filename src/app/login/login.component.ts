import { Component, ViewChild, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserModel } from '../userModel';
import { UserServiceService } from '../../app/user-service.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userpwd = {email: "", username: "", role:"", password:""};
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  public login(){
    
    
    this.http.post('http://localhost:3000/api/auth', this.userpwd)
      .subscribe((data: any) => {
        //alert(JSON.stringify(this.userpwd));
        if(data != null){
          localStorage.setItem('role', data.role);
          localStorage.setItem('username', this.userpwd.username);
          localStorage.setItem('email', this.userpwd.email);
          localStorage.setItem('password', this.userpwd.password);
          this.router.navigateByUrl('account');
        }else{
          alert("sorry, email or password not valid");
        }
      })
      
  }

}