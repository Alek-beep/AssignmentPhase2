import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from './userModel';
import { UserServiceService } from '../app/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Week4tut";
  user1:any;
  user2:any;
  user3:any;
  constructor(private router: Router, private userdata:UserServiceService) { }

  ngOnInit(): void {
    this.user1 = new UserModel("Riley", "riley.woltmann@gmail.com", 1, "Super Admin");
    this.userdata.add(this.user1).subscribe((data)=>{
      if(data.err==null){
        console.log(this.user1, "was added");
      }else{
        console.log("not added");
      }
    });
  }

  public logout(){
    this.userdata.getlist().subscribe((data)=>{
      console.log(data);
      });
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

  public showUsers(){
    this.userdata.getlist().subscribe((data)=>{
      console.log(data);
     });
  }

}
