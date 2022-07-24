import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  username=null;
  a=true;

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.username=this.login.getUser().username;
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.username=this.login.getUser().username;

    });
  }
  public logout()
  {
    this.login.logout();
    this.isLoggedIn=false;
    this.username = null;
    window.location.reload();
  }

}
