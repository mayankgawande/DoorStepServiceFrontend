import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-homejobs',
  templateUrl: './homejobs.component.html',
  styleUrls: ['./homejobs.component.css']
})
export class HomejobsComponent implements OnInit {
  jobs=[{
    jId:'',
    jobTitle:'',
    description:'',
      
  }];

  constructor(
    private _job:JobService,
  ) { }
  

  ngOnInit(): void {
   this._job.getHomeJobs().subscribe((data:any)=>{
      this.jobs=data;
      console.log(data);
    });
  

  }

}
