import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}

  ngOnInit() {}

  devs = [
    { id: 1, name: "Christy", desk: "Desk 1" },
    { id: 2, name: "Bill", desk: "Desk 1" },
    { id: 3, name: "Francis", desk: "Desk 1" }
  ];
}
