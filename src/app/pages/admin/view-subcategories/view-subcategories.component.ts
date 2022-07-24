import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-subcategories',
  templateUrl: './view-subcategories.component.html',
  styleUrls: ['./view-subcategories.component.css']
})
export class ViewSubcategoriesComponent implements OnInit {

  subcategories=[
    {
      scid:'',
      title:'',
      description:'',
      skillCategory:{
        title:'',
      }

    },
  ]
  constructor(
    private _subcat:SubcategoryService
  ) { }

  ngOnInit(): void {
    this._subcat.subcategories().subscribe(
      (data:any)=>{
        this.subcategories=data;
        console.log(this.subcategories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error', "Error in loading data",'error');
      }
    )
  }
  deleteSubCategory(scid:any){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if (result.isConfirmed){
        this._subcat.deleteSubCategory(scid).subscribe(
          (data:any)=>{
            this.subcategories= this.subcategories.filter((subcategory)=>subcategory.scid!=scid);
            Swal.fire('success','subcategory  delete','success');
          },
          (error)=>{
            Swal.fire('Error','Error in deleting subcategory','error');
          }
        );
      }
       
      
    });

  }

}
