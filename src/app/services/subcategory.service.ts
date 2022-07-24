import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(
  private _http:HttpClient
  ) { }
  public subcategories(){
    return this._http.get(`${baseUrl}/subcategory/`);
  }
  public subcategoriesOfCategory(cid:any){
    return this._http.get(`${baseUrl}/subcategory/category/${cid}`);

  }
  public addsubcategories(subcategory:any){
    return this._http.post(`${baseUrl}/subcategory/`, subcategory);
  }
  public deleteSubCategory(scid:any)
  {
    return this._http.delete(`${baseUrl}/subcategory/${scid}`);
  }
}
