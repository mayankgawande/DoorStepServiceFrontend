import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSkillCategoryComponent } from './pages/admin/add-skill-category/add-skill-category.component';
import { AddSubcategoryComponent } from './pages/admin/add-subcategory/add-subcategory.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { ViewSkillcategoriesComponent } from './pages/admin/view-skillcategories/view-skillcategories.component';
import { ViewSkillpersonsComponent } from './pages/admin/view-skillpersons/view-skillpersons.component';
import { ViewSubcategoriesComponent } from './pages/admin/view-subcategories/view-subcategories.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SkillPersonRegisterComponent } from './pages/skill-person-register/skill-person-register.component';
import { AddJobComponent } from './pages/user/add-job/add-job.component';
import { ApplyJobComponent } from './pages/user/apply-job/apply-job.component';
import { FeedbackComponent } from './pages/user/feedback/feedback.component';
import { RegisterComponent } from './pages/user/register/register.component';


import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ViewallJobComponent } from './pages/user/viewall-job/viewall-job.component';
import { ViewappliersComponent } from './pages/user/viewappliers/viewappliers.component';
import { ViewcategorypersonComponent } from './pages/user/viewcategoryperson/viewcategoryperson.component';
import { ViewcreatedJobsComponent } from './pages/user/viewcreated-jobs/viewcreated-jobs.component';
import { ViewjobpersonComponent } from './pages/user/viewjobperson/viewjobperson.component';
import { ViewmappedjobsComponent } from './pages/user/viewmappedjobs/viewmappedjobs.component';


import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full',
  },

  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full',
  },
  {
    path:'skillperson-register',
    component: SkillPersonRegisterComponent,

  },
  {
    path:'admin',
    component: DashboardComponent,
   
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,

      },
      {
        path:'profile',
        component: ProfileComponent,
      },
      
      {
        path:'add-skillcategory',
        component:AddSkillCategoryComponent,
      },
      {
        path:'skillcategories',
        component:ViewSkillcategoriesComponent,
      },
      {
        path:'subcategories',
        component:ViewSubcategoriesComponent,
      },
      {
        path:'add-subcategory',
        component:AddSubcategoryComponent,
      },
      {
        path:'view-skillperson/:scid/:title',
        component:ViewSkillpersonsComponent,
      },
    
    ]
  },
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    
    canActivate:[NormalGuard],
    children:[
      
      {
        path:'add-job',
        component:AddJobComponent,
      },
      {
      path:'register',
      component:RegisterComponent,
      },
      {
        path:'viewcreated-job',
        component:ViewcreatedJobsComponent,

      },
      {
        path:'viewall-job',
        component:ViewallJobComponent,

      },
      {
        path:'applyJob/:jid',
        component:ApplyJobComponent,
      },
      {
        path:'viewappliers/:jId',
        component:ViewappliersComponent,
      },
      {
        path:'viewmapped-job',
        component:ViewmappedjobsComponent,
      },
      {
        path:'category-skillperson',
        component:ViewcategorypersonComponent,

      },
      {
        path:'viewmappedperson',
        component:ViewjobpersonComponent,
      },
      {
        path:'feedback/:jobid',
        component:FeedbackComponent,
      }
    
      
  
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
