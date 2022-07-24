import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillPersonService } from 'src/app/services/skill-person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill-person-register',
  templateUrl: './skill-person-register.component.html',
  styleUrls: ['./skill-person-register.component.css']
})
export class SkillPersonRegisterComponent implements OnInit {

  constructor(
    private _sperson:SkillPersonService,
    private _snack:MatSnackBar,
  ) { }
  public skillPerson={
    id:'',
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    skill:'',
    description:'',

  }

  ngOnInit(): void {
  }
  formSubmit()
  {
    console.log(this.skillPerson);
    if(this.skillPerson.userName==''|| this.skillPerson.userName==null)
    {
      //alert('user is required')
      this._snack.open("username is required",'',{
        duration:3000,
      } );
      return;
    }
    this._sperson.addSkillPerson(this.skillPerson).subscribe(
      (data:any)=>{
        //succes
        console.log(data);
        //alert('success');
        Swal.fire('Success','SkillPerson id is '+data.pId,'success');
      },
      (error) => {
        console.log(error);
     // alert('something went wrong'); 
    this._snack.open('something went wrong','',{
      duration:3000
    })     
  }
    )
    
  }
}
