import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { CreditDashboardComponent } from './credit-dashboard/credit-dashboard.component';

const routes: Routes = [
  {path:"", component:CreditDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditManagerRoutingModule { }
