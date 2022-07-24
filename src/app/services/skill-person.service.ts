import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillPersonService {

  constructor(
    private _http:HttpClient 
  ) { }
  public getSkillPersonsOfSubCategory(scid:any){
    return this._http.get(`${baseUrl}/skillpersons/subcategory/${scid}`);

  }

  //add question
  public addSkillPerson(skillperson:any){
    return this._http.post(`${baseUrl}/skillpersons/`,skillperson);
  }

  //delete question
  public deleteSkillPerson(spid:any){
    return this._http.delete(`${baseUrl}/skillpersons/${spid}`);
  }
  public getSkillPersonUsername(username:any){
    return this._http.get(`${baseUrl}/skillpersons/${username}`);
  }
  public getSkillPerson(username:any){
    return this._http.get(`${baseUrl}/skillpersons/${username}`);
  }
  public getJobHomePerson()
  {
    return this._http.get(`${baseUrl}/skillpersons/homeperson`);
  }
 
}
