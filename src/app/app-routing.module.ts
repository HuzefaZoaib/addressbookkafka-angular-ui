import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchPeriodicListComponent } from './fetch-periodic-list/fetch-periodic-list.component';
import { SystemCheckComponent } from './system-check/system-check.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'systemcheck', component:SystemCheckComponent},
  {path:'progressbar', component:ProgressBarComponent},
  {path:'list', component:FetchPeriodicListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
