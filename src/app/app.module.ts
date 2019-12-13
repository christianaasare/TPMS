import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/admin/components/dashboard/dashboard.component';
import { DashboardComponent as Dev } from './screens/developer/components/dashboard/dashboard.component';
import { CardComponent } from './screens/admin/components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoursComponent } from './screens/developer/components/hours/hours.component';
import { HourComponent } from './screens/admin/components/hour/hour.component';
import { ProjectsComponent } from './screens/admin/components/projects/projects.component';

// Material Stuff
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dev,
    CardComponent,
    HoursComponent,
    HourComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
