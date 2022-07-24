import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplyJobService } from 'src/app/services/apply-job.service';
import { JobService } from 'src/app/services/job.service';
import { SkillPersonService } from 'src/app/services/skill-person.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-viewappliers',
  templateUrl: './viewappliers.component.html',
  styleUrls: ['./viewappliers.component.css']
})
export class ViewappliersComponent implements OnInit {
  aplliers:any;
  jId:any;
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
  person={
    id:'',
    userName:'',
    phone:'',
    address:'',
    email:'',
  }
 

  constructor(
    private _jobApllied:ApplyJobService,
    private _route:ActivatedRoute,
    private _job:JobService,
    private _person:SkillPersonService,
    private _router:Router,
  ) { }

  ngOnInit(): void {
    this.jId=this._route.snapshot.params.jId;
    this._jobApllied.getappliers(this.jId).subscribe((data:any)=>{
      this.aplliers=data;
      console.log(data);
    })
  
    

  }
  hire(jobapplied:any)
  {
    this._person.getSkillPerson(jobapplied.username).subscribe((data:any)=>

    {
      console.log(data);
      this.person=data;
      this._job.getJob(jobapplied.jobId).subscribe((data1:any)=>{
        this.job.jId=data1.jId;
        this.job.jobTitle=data1.jobTitle;
        this.job.description=data1.description;
        this.job.id1=data1.id1;
        this.job.username=data1.username;
        this.job.address=data1.address;
        this.job.phone=data1.phone;
        this.job.email=data1.email;
        this.job.status="MAPPED";
        this.job.mappedstatus=1;
        
       
        this.job.id2=this.person.id;
        this.job.username1=this.person.userName;
        this.job.phone1=this.person.phone;
        this.job.address1=this.person.address;
        this.job.email1=this.person.email;
        this.job.noOFAppliers=data1.noOFAppliers;
        this._job.updateJob(this.job).subscribe((data2:any)=>{
          Swal.fire('success','you hired a person','success');
        })
        this._router.navigate(['/user-dashboard/viewcreated-job'])
        
          
        });
        
        


      })
  
    
  }

}
