import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { SkillPersonService } from 'src/app/services/skill-person.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor(
    private _login:LoginService,
    private _sperson:SkillPersonService,
   ) { }
   isRegister:boolean=false;

  ngOnInit(): void {
  //  this._login.getCurrentUser().subscribe((data:any)=>{
    //  this._sperson.getSkillPersonUsername(data.username).subscribe((data:any)=>{
    //         this.isRegister=true;
     //       });
       //   })
  }

  


}
