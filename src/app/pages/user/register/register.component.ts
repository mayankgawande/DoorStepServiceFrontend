import { Component, OnInit } from '@angular/core';


import { LoginService } from 'src/app/services/login.service';
import { SkillPersonService } from 'src/app/services/skill-person.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  skillperson=
  {
    id:'',
    userName:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    profile:'',
    skill:'',
    description:'',
    address:'',

  }

  subcategory=[{
    scid:'',
    title:'',
  }
  
];
isRegister:boolean=false;


  constructor(
   
    private _sperson:SkillPersonService,
    
    private _login:LoginService,
    private _scat:SubcategoryService,
  ) { }

  ngOnInit(): void {
   this._login.getCurrentUser().subscribe((data:any)=>
   {
    this.skillperson.id=data.id;
    this.skillperson.userName=data.username;
    this.skillperson.firstName=data.firstName;
    this.skillperson.lastName=data. lastName;
    this.skillperson.email=data.email;
    this.skillperson.phone=data.phone;
    this.skillperson.profile=data.profile;
    
  
   },
   (error)=>
   {
    Swal.fire('Error','error in loading data from server','error')
   });
  
   
   this._scat.subcategories().subscribe((data:any)=>
   {
     this.subcategory=data;
   },
   (error)=>
   {
    Swal.fire('Error','error in loading data from server','error')
   })
   
   
  }
  register()
  {
    this._sperson.getSkillPerson(this.skillperson.userName).subscribe((data:any)=>
    {
      if(data)
      {
        Swal.fire('error',"You are already registered",'error');
        return
      }
      else
      {
        this._sperson.addSkillPerson(this.skillperson).subscribe((data:any)=>{
          Swal.fire('success',"you Registered successfully",'success');

      });

      }

    })
    
   
  }
 
}
