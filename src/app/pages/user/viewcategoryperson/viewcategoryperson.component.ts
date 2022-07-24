import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';
import { SkillPersonService } from 'src/app/services/skill-person.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewcategoryperson',
  templateUrl: './viewcategoryperson.component.html',
  styleUrls: ['./viewcategoryperson.component.css']
})
export class ViewcategorypersonComponent implements OnInit {

  
  skillPersons:any;
  skill:any;
  subcategory:any;
 
 subcategories:any;

  job={
    jId:'',
    jobTitle:'',
    description:'',
    id1:'',
    username:'',
    address:'',
    phone:'',
    email:'',
    status:'',
    id2:'',
    username1:'',
    phone1:'',
    address1:'',
    email1:'',
    noOFAppliers:'',
    mappedstatus:1,
  }

  constructor(
    private _person:SkillPersonService,
    private _scat:SubcategoryService,
    private _login:LoginService,
    private _job:JobService,
  ) { }

  ngOnInit(): void {
    this._scat.subcategories().subscribe((data:any)=>{
      this.subcategory=data;
    })
  

    this._login.getCurrentUser().subscribe(
      (data:any)=>{
       this.job.id1=data.id;
       this.job.username=data.username;
       this.job.address=data.address;
       this.job.phone=data.phone;
       this.job.email=data.email;
      },
      (error)=>{
        console.log(error);
      }
    )

  }
  search()
  {
    this._person.getSkillPersonsOfSubCategory(this.skill).subscribe((data:any)=>{
      this.skillPersons=data;
    });
  }
  hire(person:any)
  {
        this.job.jobTitle=this.skill;
        this.job.status="MAPPED";
        this.job.mappedstatus=1;
        this.job.id2=person.id;
        this.job.username1=person.userName;
        this.job.phone1=person.p
        this.job.address1=person.address;
        this.job.email1=person.email;
       
        this._job.addJob(this.job).subscribe((data2:any)=>{
          Swal.fire('success','you hired a person','success');
        })
        
    }
    
}
