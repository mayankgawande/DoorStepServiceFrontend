import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplyJobService } from 'src/app/services/apply-job.service';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  
  applyJob={
    
    jobId:'',
    
    status:'UNMAPPED',
    username:'',
  }
  user={
    username:'',
    firstName:'',
    
  }
  
  job={
    jId:'',
    jobTitle:'',
    description:'',
    status:'',
    id1:'',
    username:'',
    address:'',
    phone:'',
    email:'',
    
    
    subcategory:{
      scid:'',
      title:'',
    }
    
    

  }
  jobId:any

  constructor(
    private _route:ActivatedRoute,
    private _applyjob:ApplyJobService,
    private _login:LoginService,
    private _job:JobService,
    
  ) { }

  ngOnInit(): void {
    this.applyJob.jobId=this._route.snapshot.params.jid;
    this._route.params.subscribe((params)=>{
      this._job.getJob(params.jid).subscribe((data:any)=>
    {
      this.job=data; 

    })
    }
    )
    this._job.getJob(this.jobId).subscribe((data:any)=>
    {
      this.job=data; 

    })
    this._login.getCurrentUser().subscribe((data:any)=>{
      this.applyJob.username=data.username;
    })
    
  
    this.applyJob.username=this.user.username;
    
  }
  apply(){
    this._applyjob.applyJob(this.applyJob).subscribe((data:any)=>
    {
      Swal.fire('succes',"You Apllied Successfully",'success');
    })
  }

}
