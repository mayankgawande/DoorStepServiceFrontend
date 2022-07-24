import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-viewall-job',
  templateUrl: './viewall-job.component.html',
  styleUrls: ['./viewall-job.component.css']
})
export class ViewallJobComponent implements OnInit {
  jobs=[{
    jId:'',
    jobTitle:'',
    description:'',
      
  }];
  jobApply={
    job:{
      jid:'',
      jobTitle:'',
     },
     username:'',
     status:'UNMAPPED'
    
  }
  job={
    jid:'',
    jobTitle:'',
  }

  constructor(
 private _job:JobService,
  ) { }

  ngOnInit(): void {
    this._job.getAllJobs().subscribe((data:any)=>{
      this.jobs=data;
    });
  }
  
}