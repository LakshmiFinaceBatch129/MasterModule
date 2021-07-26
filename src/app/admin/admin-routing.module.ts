import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ElectronicsItemComponent } from './electronics-item/electronics-item.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';
import { ViewElectronicsItemComponent } from './view-electronics-item/view-electronics-item.component';
import { ViewLoanTypeComponent } from './view-loan-type/view-loan-type.component';

const routes: Routes = [

  {path:'',component:AdminDashboardComponent,children:[
    {path:"electronicsItem", component:ElectronicsItemComponent},
    {path:"loantype", component:LoanTypeComponent},
    {path:'view-loan-type',component:ViewLoanTypeComponent},
    {path:'view-electronic-item',component:ViewElectronicsItemComponent},
    {path:'view-applicant',component:ViewApplicantComponent},
    

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
