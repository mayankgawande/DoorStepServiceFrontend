import { Component, OnInit } from '@angular/core';
import { SkillcategoryService } from 'src/app/services/skillcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-skillcategories',
  templateUrl: './view-skillcategories.component.html',
  styleUrls: ['./view-skillcategories.component.css']
})
export class ViewSkillcategoriesComponent implements OnInit {

  categories=[
    {
      
      title:'',
      description:'',
      
    }
  ]
  
  constructor(
    private _category:SkillcategoryService,
  ) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      //css
      this.categories=data;
      console.log(this.categories);
    },(error)=>{
      console.log(error);
      Swal.fire("Error","error in loading data","error")
    });
  }
  }


