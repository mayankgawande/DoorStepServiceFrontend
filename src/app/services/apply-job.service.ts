import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ApplyJobService {

  constructor(
    private _http:HttpClient,
  ) { }

  public applyJob(jobApply:any)
  {
    return this._http.post(`${baseUrl}/jobapplied/`,jobApply);
  }
  public getappliers(jId:any)
  {
    return this._http.get(`${baseUrl}/jobapplied/job/${jId}`);
  }
  public delete(jobapplied:any)
  {
    return this._http.delete(`${baseUrl}/jobapplied/${jobapplied}`);
    
  }
  public deleteJobApplied(jaId:any)
    {
      return this._http.delete(`${baseUrl}/delete/${jaId}`);

    }
}
