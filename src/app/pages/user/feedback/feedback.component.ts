import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  rating:number[]=[1,2,3,4,5];
  rating1:any;
  rating2:any;
  jobid:any;
  constructor(
    private _route:ActivatedRoute,
    private _job:JobService,
    private _router:Router,
  ) { }

  ngOnInit(): void {
    this.jobid=this._route.snapshot.params.jobid;
    
    
    
  }
  done()
  {
    Swal.fire("success","Thank You forYour Feedback","success")
    this._job.deleteJob(this.jobid).subscribe((data:any)=>
    {

    });
    this._router.navigate(['/user-dashboard/viewmapped-job']);
    
  }

}
