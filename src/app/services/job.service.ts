import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private _http:HttpClient
  ) { }
  public addJob(job:any)
  {
    return this._http.post(`${baseUrl}/job/`,job);
  }
  public getAllJobs()
  {
    return this._http.get(`${baseUrl}/job/`);
  }
  public getJob(jid:any)
  {
    return this._http.get(`${baseUrl}/job/${jid}`);
  }
 
  public updateJob(job:any)
  {
    return this._http.put(`${baseUrl}/job/`,job);
  }
  public deleteJob(jid:any)
  {
    return this._http.delete(`${baseUrl}/job/${jid}`);
  }
  public getJobUser(id1:any)
  {
    return this._http.get(`${baseUrl}/job/user/${id1}`);
  }
  public getJobMappedUser(id1:any)
  {
    return this._http.get(`${baseUrl}/job/usermapped/${id1}`);
  }
  public getJobMappedPerson(id2:any)
  {
    return this._http.get(`${baseUrl}/job/usermapped/${id2}`);
  }
  public getHomeJobs()
  {
    return this._http.get(`${baseUrl}/job/homejob`)
  }
 
}
