import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectloggingService {
  private projectsUrl = 'https://project.services.turntabl.io';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }
  logproject(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(this.projectsUrl + '/v1/api/addloggedproject', body,{headers: headers});
  }
  logsick(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(this.projectsUrl + '/v1/api/addloggedsick', body,{headers: headers});
  }
  logvacation(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(this.projectsUrl + '/v1/api/addloggedvaction', body,{headers: headers});
  }
  getLoggedHours(): Observable<any[]> {
    return this.http.get<any[]>(this.projectsUrl + '/v1/api/getloggedhours');
  }


}
