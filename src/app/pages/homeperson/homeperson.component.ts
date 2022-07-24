import { Component, OnInit } from '@angular/core';
import { SkillPersonService } from 'src/app/services/skill-person.service';

@Component({
  selector: 'app-homeperson',
  templateUrl: './homeperson.component.html',
  styleUrls: ['./homeperson.component.css']
})
export class HomepersonComponent implements OnInit {
  skillPersons:any;

  constructor(
    private _person:SkillPersonService,
  ) { }

  ngOnInit(): void {
    this._person.getJobHomePerson().subscribe((data:any)=>{
      this.skillPersons=data;

    })
    
  }

}
