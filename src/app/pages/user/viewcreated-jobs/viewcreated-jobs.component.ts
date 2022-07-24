import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewcreated-jobs',
  templateUrl: './viewcreated-jobs.component.html',
  styleUrls: ['./viewcreated-jobs.component.css']
})
export class ViewcreatedJobsComponent implements OnInit {

  jobs=[{
    jId:'',
    jobTitle:'',
    description:'',
      
  }];
  userid:any;
  constructor(
    private _login:LoginService,
    private _job:JobService,
  
  ) { }

  ngOnInit(): void {
    this._login.getCurrentUser().subscribe((data:any)=>
    {
      
      this._job.getJobUser(data.id).subscribe((data:any)=>
    {
      this.jobs=data;
      console.log(data);
    })
    });
  

  }
  delete(jId:any)
  {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if (result.isConfirmed){
        this._job.deleteJob(jId).subscribe(
          (data:any)=>{
            this.jobs= this.jobs.filter((job)=>job.jId!=jId);
            Swal.fire('success','quiz delete','success');
          },
          (error)=>{
            Swal.fire('Error','Error in deleting Quiz','error');
          }
        
        );
      }
    });
  }

}
