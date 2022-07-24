import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-viewjobperson',
  templateUrl: './viewjobperson.component.html',
  styleUrls: ['./viewjobperson.component.css']
})
export class ViewjobpersonComponent implements OnInit {
  jobs=[{
    jId:'',
    jobTitle:'',
    description:'',
    address:'',
    phone:'',
    username:'',
      
  }];

  constructor(
    private _login:LoginService,
    private _job:JobService,
  ) { }

  ngOnInit(): void {
    this._login.getCurrentUser().subscribe((data:any)=>
    {
      
      this._job.getJobMappedPerson(data.id).subscribe((data:any)=>
    {
      this.jobs=data;
      console.log(data);
    })
    });
  }

}
