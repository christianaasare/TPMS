import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

//components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './screens/admin/components/projects/projects.component';
import { NavigationComponent  as adminNavigation} from './screens/admin/navigation/navigation.component';
import { VerifyComponent } from './screens/verify/verify.component';
import { NavComponent as developerNavigation } from './screens/developer/nav/nav.component';


// Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { DevelopersComponent } from './screens/admin/components/developers/developers.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule,MAT_DATE_LOCALE } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatListModule} from '@angular/material/list';
import { HighchartsChartModule } from 'highcharts-angular';
import { CommonModule } from '@angular/common';
import { TimeentryComponent } from './screens/developer/components/timeentry/timeentry.component';
import { ReportComponent } from '../app/screens/admin/components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    DevelopersComponent,
    adminNavigation,
    VerifyComponent,
    developerNavigation,
    TimeentryComponent,
    ReportComponent

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    APP_INITIALIZER,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatListModule,
    HighchartsChartModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
