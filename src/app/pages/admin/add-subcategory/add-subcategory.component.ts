import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillcategoryService } from 'src/app/services/skillcategory.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  categories=[
    {
    cid:'',
    title:'',
  },
  ];
  subcategory={
    title:'',
    description:'',
    skillCategory:{
      cid:'',
    }
  }
  constructor(
    private _cat:SkillcategoryService,
    private _snack:MatSnackBar,
    private _subcat:SubcategoryService,
  ) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        //categories load
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','error in loading data from server','error')
      }
        );
  }
  addSubCategory()
  {
    if(this.subcategory.title.trim()==''||this.subcategory.title==null)
    {
      this._snack.open("Title Required",'',{
        duration:3000,
      });
      return;
    }
    this._subcat.addsubcategories(this.subcategory).subscribe(
      (data)=>{
       
        Swal.fire('Success','Subcategory is added','success')
        this.subcategory={
          title:'',
          description:'',
          skillCategory: {
             cid:'',
          },
      };
    },
    (error)=>{
      Swal.fire('error','Error while adding subcategory','error')
     
    }
    );

  }

}
