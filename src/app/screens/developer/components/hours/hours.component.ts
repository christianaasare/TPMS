import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { AppService } from "src/app/services/app.service";

export interface PeriodicElement {
  title: string;
  date: string;
  hours: number;
 // action: string;
  // project_id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { title: "Bug fix", date: "12.01.18", hours: 2 },
  { title: "Chorkor Basic School", date: "21.04.19", hours: 3 }
  // { title: 'Integration', date: '13.1.17', hours: 6},
  // { title: 'Achimota SHS', date: '3.09.17', hours:6},
  // { title: 'Database', date: '12.01.18', hours: 4},
  // { title: 'Testing', date: '13.1.17', hours: 4},
  // { title: 'API', date: '3.09.17', hours: 5},
  // { title: 'Global Code', date: '13.1.17', hours: 7},
  // { title: 'Meeting', date: '3.09.17', hours:2},
  // { title: 'Finance', date: '12.01.18', hours: 4}
];

@Component({
  selector: "app-hours",
  templateUrl: "./hours.component.html",
  styleUrls: ["./hours.component.css"]
})
export class HoursComponent implements OnInit {
  displayedColumns: string[] = ["title", "date", "hours", "action"];
  dataSource = [];

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  constructor(private appservice: AppService) {}

  ngOnInit() {
    // this.appservice.getLoggedHours().subscribe(response => {
    //   // console.log(response);
    //   this.dataSource = response
    // });
    this.appservice
      .getLoggedHoursForDev(localStorage.getItem("empId"))
      .subscribe(response => {
        this.dataSource = response;
      });
  }
}
