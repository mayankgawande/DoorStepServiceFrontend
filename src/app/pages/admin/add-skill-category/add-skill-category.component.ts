import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillcategoryService } from 'src/app/services/skillcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-skill-category',
  templateUrl: './add-skill-category.component.html',
  styleUrls: ['./add-skill-category.component.css']
})
export class AddSkillCategoryComponent implements OnInit {
  skillcategory={
    title:'',
    description:'',
  }

  constructor(
    private _scategory:SkillcategoryService,
    private _snack:MatSnackBar,
  ) { }

  ngOnInit(): void {}
  formSubmit(){
    if(this.skillcategory.title.trim()==''|| this.skillcategory.title==null){
      this._snack.open("Title Required",'',{
        duration:3000
      });

      return;
    }
    //all done
    this._scategory.addCategory(this.skillcategory).subscribe(
      (data:any)=>{
        this.skillcategory.title='';
        this.skillcategory.description='';
        Swal.fire("Success","Category is added successfully","success");
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','server error','success');
      }
    )
  }

}
