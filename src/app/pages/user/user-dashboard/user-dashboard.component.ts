import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private _route:Router,
  ) { }

  ngOnInit(): void {
  }
  navigate1()
  {
    this._route.navigate(['/user-dashboard/category-skillperson']);

  }
  navigate2()
  {
    this._route.navigate(['/user-dashboard/viewall-job']);
  }

}
