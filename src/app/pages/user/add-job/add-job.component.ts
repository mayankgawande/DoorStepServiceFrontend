import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';
import { SkillcategoryService } from 'src/app/services/skillcategory.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  
  
  job={
    jobTitle:'',
    description:'',
    status:'UNMAPPED',
    id1:'',
    username:'',
    address:'',
    phone:'',
    email:'',
    
    
    subCategory:{
      scid:'',
      title:'',
    }
  
  };
  subcategories=[
    {
      scid:'',
      title:'',
    }
  ];

  


  constructor(
    private _login:LoginService,
    private _job:JobService,
    
    private _snack:MatSnackBar,
    private _subcat:SubcategoryService,
  ) { }

  ngOnInit(): void {
    

        this._subcat.subcategories().subscribe(
          (data:any)=>{
            //categories load
            this.subcategories=data;
            
           
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error','error in loading data from server subcategory','error')
          }
            );

            this._login.getCurrentUser().subscribe(
              (data:any)=>{
               this.job.id1=data.id;
               this.job.username=data.username;
               this.job.address=data.address;
               this.job.phone=data.phone;
               this.job.email=data.email;
              },
              (error)=>{
                console.log(error);
              }
            )
  }

  addJob()
  {
    if(this.job.jobTitle.trim()==''||this.job.jobTitle==null)
    {
      this._snack.open("Title Required",'',{
        duration:3000,
      });
      return;
    }
    this._job.addJob(this.job).subscribe(
      (data)=>{
       
        Swal.fire('Success','Job is added','success')
      
          
      
    },
    (error)=>{
      Swal.fire('error','Error while adding subcategory','error')
     
    }
    );
  }

}
