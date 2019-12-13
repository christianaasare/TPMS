import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeesService } from '../../../../employees.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  // hours = [
  //   {name:'1', title:'2918', activity:'Microservice', hours:'Microservice API',date:"15th", comments:'4'},
  //   {name:'2', title:'2839', activity:'Concurrency', hours:'Concurrency ',date:"12th", comments:'6'}
 // ]

 newDevHourForm = new FormGroup({
  name: new FormControl(''),
  title: new FormControl(''),
  activity: new FormControl(''),
  hours: new FormControl(''),
  date: new FormControl(''),
  commnts: new FormControl('')
});
  constructor(private formService: EmployeesService) { }

  ngOnInit() {}
  onSubmit() {
    this.formService
    .addEmp(this.newDevHourForm.value)
    .subscribe(h => console.log(h));
  }
}
