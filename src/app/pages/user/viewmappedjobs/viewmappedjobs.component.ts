import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-viewmappedjobs',
  templateUrl: './viewmappedjobs.component.html',
  styleUrls: ['./viewmappedjobs.component.css']
})
export class ViewmappedjobsComponent implements OnInit {
  jobs=[{
    jId:'',
    jobTitle:'',
    description:'',
    address1:'',
    phone1:'',
    username1:'',
      
  }];

  constructor(
    private _login:LoginService,
    private _job:JobService,
  ) { }

  ngOnInit(): void {
    this._login.getCurrentUser().subscribe((data:any)=>
    {
      
      this._job.getJobMappedUser(data.id).subscribe((data:any)=>
    {
      this.jobs=data;
      console.log(data);
    })
    });
  }

}
