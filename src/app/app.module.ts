import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';



import { AddSkillCategoryComponent } from './pages/admin/add-skill-category/add-skill-category.component';
import { ViewSkillcategoriesComponent } from './pages/admin/view-skillcategories/view-skillcategories.component';
import { AddSubcategoryComponent } from './pages/admin/add-subcategory/add-subcategory.component';
import { ViewSubcategoriesComponent } from './pages/admin/view-subcategories/view-subcategories.component';
import { ViewSkillpersonsComponent } from './pages/admin/view-skillpersons/view-skillpersons.component';

import { SkillPersonRegisterComponent } from './pages/skill-person-register/skill-person-register.component';


import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { AddJobComponent } from './pages/user/add-job/add-job.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ViewcreatedJobsComponent } from './pages/user/viewcreated-jobs/viewcreated-jobs.component';
import { ViewallJobComponent } from './pages/user/viewall-job/viewall-job.component';
import { ApplyJobComponent } from './pages/user/apply-job/apply-job.component';
import { ViewappliersComponent } from './pages/user/viewappliers/viewappliers.component';
import { ViewmappedjobsComponent } from './pages/user/viewmappedjobs/viewmappedjobs.component';
import { ViewcategorypersonComponent } from './pages/user/viewcategoryperson/viewcategoryperson.component';
import {MatTableModule} from '@angular/material/table';
import { ViewjobpersonComponent } from './pages/user/viewjobperson/viewjobperson.component';
import { HomejobsComponent } from './pages/homejobs/homejobs.component';
import { HomepersonComponent } from './pages/homeperson/homeperson.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FeedbackComponent } from './pages/user/feedback/feedback.component';

import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
  
    SidebarComponent,
    WelcomeComponent,
    ProfileComponent,
   
    
   
    AddSkillCategoryComponent,
    ViewSkillcategoriesComponent,
    AddSubcategoryComponent,
    ViewSubcategoriesComponent,
    ViewSkillpersonsComponent,
    
    SkillPersonRegisterComponent,
       
        
        
         UserSidebarComponent,
         AddJobComponent,
         RegisterComponent,
         ViewcreatedJobsComponent,
         ViewallJobComponent,
         ApplyJobComponent,
         ViewappliersComponent,
         ViewmappedjobsComponent,
         ViewcategorypersonComponent,
         ViewjobpersonComponent,
         HomejobsComponent,
         HomepersonComponent,
         FeedbackComponent,
        
        
      
       
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatPaginatorModule,

    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
