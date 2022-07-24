import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillcategoryService {

  constructor(
    private _http:HttpClient
  ) { }
  public categories(){
    return this._http.get(`${baseUrl}/skillcategory/`)
  }
  public addCategory(category:any){
    return this._http.post(`${baseUrl}/skillcategory/`, category);

}
}
