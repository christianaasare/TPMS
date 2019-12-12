import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent as D} from './screens/admin/components/dashboard/dashboard.component';
import { DashboardComponent } from './screens/developer/components/dashboard/dashboard.component';


const routes: Routes = [
  // { path: 'home', component:AppComponent},
  { path: 'admin', component:D},
  {path: 'developer', component:DashboardComponent},
  {path: 'sp', component:D},
  // {path:'', redirectTo:'admin', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
