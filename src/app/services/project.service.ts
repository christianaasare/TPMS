import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';
import { ConfigSettingsService } from './config-settings.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projectapi = ConfigSettingsService.settings.apiServer.project;
  

  // private projectUrl = 'https://project.services.turntabl.io';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  addNewProject(requestBody: any): Observable<any> {
    let body = JSON.stringify(requestBody);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this.http.post<any>(
      this.projectapi + '/v1/api/project',body,{headers: headers} );
  }
  
  assignProjectToEmployee(project_id,employee_id): Observable<any> {
    return this.http.get<any>(
      this.projectapi + '/v1/api/project/'+project_id+'/assign/employee/' + employee_id
    );
  }

  getProject(): Observable<any> {
    return this.http.get<any>(this.projectapi + '/v1/api/projects')
  }

  getAssignedProjects(employee_id: string): Observable<any> {
    return this.http.get<any>(
      this.projectapi + '/v1/api/projects/assigned/employee/' + employee_id
    );
  }

  assignProjecttoDev(project_id: number, body:number): Observable<Project[]> {
      return this.http.post<Project[]>(this.projectapi + "/projects/assign/"+ project_id,body);
  }

  removeProjectFromEmployee( project_id,employee_id):Observable<any>{
    return this.http.get<any>(
      this.projectapi + '/v1/api/project/' + project_id + '/remove/employee/'+ employee_id
    );

  }
 
  getProjectByEmployeeId(employee_id): Observable<any> {
    return this.http.get<any>(
      this.projectapi + "/v1/api/projects/assigned/employee/" + employee_id
    );
  }

}
