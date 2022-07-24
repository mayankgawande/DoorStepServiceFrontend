import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  username =null;
  userId=null;
  firstName=null;
  lastName=null;
  phoneNo=null;
  role=null;
  status: any;

   constructor(private login: LoginService) { }

  ngOnInit(): void {
   
    this.username = this.login.getUser().username;
    this.userId = this.login.getUser().id;
    this.firstName = this.login.getUser().firstName;
    this.lastName = this.login.getUser().lastName;
    this.phoneNo = this.login.getUser().phone;
    this.role = this.login.getUser().authorities[0].authority;
    this.status = (this.login.getUser().enabled)?"Active":"Inactive";
   
    
    
  }

}
