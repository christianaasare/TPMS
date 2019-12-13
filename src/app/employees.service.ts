import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  private dbURL = 'https://developerservice03.herokuapp.com';

  getEmp(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.dbURL + '/dev');
  }

  addEmp(emp: Emp): Observable<Emp> {
    return this.http.post<Emp>(this.dbURL + '/dev/add', emp);
  }
}
