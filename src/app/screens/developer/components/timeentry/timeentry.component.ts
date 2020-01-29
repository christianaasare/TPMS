import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectloggingService } from 'src/app/services/projectloggingService';
import { ProjectService } from 'src/app/services/project.service';


export interface Data {
  title: string;
 
}
const ELEMENT_DATA: Data[] = [
  {
    title: 'Projects',
  }
];

@Component({
  selector: 'app-timeentry',
  templateUrl: './timeentry.component.html',
  styleUrls: ['./timeentry.component.css']
})

export class TimeentryComponent implements OnInit {
  dateSort=''

  successMessage: boolean = false;
  userProjects: any

    timeEntry = new FormGroup({
    project_hours: new FormControl(''),
    volunteering_hours: new FormControl(''),
    vacation: new FormControl(''),
    sick: new FormControl(''),
    emp_id: new FormControl(),
    project_id: new FormControl(),
    logged_date: new FormControl(new Date().toISOString().slice(0, 10)),
  });
  constructor(
    private projectLog: ProjectloggingService,
    private projectService: ProjectService
  ) {}
  newProject = '';
  assignedprojects =[{title: "tpms"}]
  displayedColumns: string[] = [
    'Projects',
    'Volunteering',
    'Sick',
    'Vacation'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    
    var userData = JSON.parse(localStorage.getItem("userProjects"))
    
    if(userData === null){
      this.userProjects = [];
    }else{
      this.userProjects = userData;
    }
   }

  onSickFieldChecked(event) {
    if (event == 'sick') {
      this.timeEntry.controls.vacation.disable();
      this.timeEntry.controls.volunteering_hours.disable();
      this.timeEntry.controls.project_hours.disable();
    }
    else {
      this.timeEntry.controls.vacation.enable();
      this.timeEntry.controls.volunteering_hours.enable();
      this.timeEntry.controls.project_hours.enable();
    }
  }

  onVacationFieldChecked(event) {
    if (event == 'vacation') {
      this.timeEntry.controls.sick.disable();
      this.timeEntry.controls.volunteering_hours.disable();
      this.timeEntry.controls.project_hours.disable();
    }
    else {
      this.timeEntry.controls.sick.enable();
      this.timeEntry.controls.volunteering_hours.enable();
      this.timeEntry.controls.project_hours.enable();
    }
  }

  onSubmitChecked(event: string) {
    if (event === 'triggered') {
      this.timeEntry.controls.vacation.enable();
      this.timeEntry.controls.sick.enable();
      this.timeEntry.controls.volunteering_hours.enable();
      this.timeEntry.controls.project_hours.enable();
    }
  }

logsuccess() {}
  onSubmit() {
      var employee_firstname = this.userProjects[0].employee_firstname;
      var employee_lastname = this.userProjects[0].employee_lastname;
      var employee_email = this.userProjects[0].employee_email;
      var employee_id = this.userProjects[0].employee_id;
      var project_hours = this.timeEntry.value.project_hours;
      var project_id = this.timeEntry.value.project_id.project_id;
      var project_date = this.timeEntry.value.logged_date;

      let requestData = {
        employee_firstname:employee_firstname,
        employee_lastname:employee_lastname,
        employee_email:employee_email,
        employee_id:employee_id,
        project_hours:project_hours,
        project_id:project_id,
        project_date:project_date
      }

    this.projectLog.logproject(requestData) .subscribe(response => {
      if(response.code === "00"){
        this.successMessage = true;
      }else{
        this.successMessage = false;
      }
    });
  }

}


