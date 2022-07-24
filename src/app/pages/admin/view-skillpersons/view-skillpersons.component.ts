import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SkillPersonService } from 'src/app/services/skill-person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-skillpersons',
  templateUrl: './view-skillpersons.component.html',
  styleUrls: ['./view-skillpersons.component.css']
})
export class ViewSkillpersonsComponent implements OnInit {

  scid:any;
  stitle:any;
  sPersons:any=[
    {
      pId:'',
      description:'',
      userName:'',
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      profile:'',
      skill:'',

    },
  ];
  constructor(
    private _route:ActivatedRoute,
    private _skillPerson:SkillPersonService,
    private _snak:MatSnackBar,
    
  ) { }

  ngOnInit(): void {
    this.scid=this._route.snapshot.params.scid;
    this.stitle=this._route.snapshot.params.title;
    this._skillPerson.getSkillPersonsOfSubCategory(this.scid).subscribe(
      (data:any)=>
    {
      this.sPersons=data;
    },
    (error:any)=>{
      console.log(error);
    });
  }
  //delete SkillPersons
deleteSkillPerson(spid:any)
{
  Swal.fire({
    icon:'info',
    showCancelButton:true,
    confirmButtonText:'Delete',
    title:'Are You Sure,want to delete this Person',
  }).then((result)=>{
    if(result.isConfirmed)
    {
      this._skillPerson.deleteSkillPerson(spid).subscribe(
        (data:any)=>{
          this._snak.open('Person Deleted','',{
            duration:3000,
          });
          this.sPersons=this.sPersons.filter((q:any)=>q.spid != spid);
        },
        (error)=>{
          this._snak.open('Error in deleting Question','',{
            duration:3000,
          });
        }
      );
    }
  })

}  
  

}
