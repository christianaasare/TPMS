import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProjectService } from 'src/app/project.service';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/employee';
import { AppService } from 'src/app/services/app.service';
import { ProjectInterface } from 'src/app/screens/project-interface';


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developers = [
    // {value: 'Dennis Bill'},
    // {value: 'Francis Billa'},
    // {value: 'Francis Billa'}
  ];
  // devselected = 'option2';

  projects = [
    // {value: 'TPMS'},
    // {value: 'TCMS'},
    // {value: 'DBMS'}
  ];
  // projselected = 'option2';

  assignedprojects = { project_id: 2, title: "" };

  // incomingProject = { project_id: 2, title: "" };



  myControl = new FormControl({

  });
 


  constructor(private ProjectService: ProjectService , private devService: AppService) { }

  developerObservable:Observable<Employee[]>;
  devs = [];

  projectsObservable:Observable<ProjectInterface[]>;
  project = [];

  assignedObservable:Observable<ProjectInterface[]>;
  assign =[];

  ngOnInit() {
      this.devService.getDevelopers().subscribe(response => {
      this.developers = response;
      // console.log(response)
    });
    this.ProjectService.getProject().subscribe(response => {
      this.projects = response;
    });

 
 
//     this.ProjectService.assignProjecttoDev().subscribe(response => {
//         this.projects = response;
//       });

// }

  }
 

curremp:string;
currproj:string;

devMethod(emp){
  this.curremp=emp.emp_name
  // console.log(emp)

  this.ProjectService
  .getAssignedProject(emp.emp_id)
  .subscribe(response => {
    // this.incomingProject.project_id = response.project_id;
    // localStorage.setItem("pid", response.project_id.toString());
    // this.assignedprojects.title = response.title;
    console.log(response);
    
  });

  
}

projMethod(proj){
  this.currproj=proj
  // console.log(proj)
  
}

}