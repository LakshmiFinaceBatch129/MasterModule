import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { ElectronicsItemComponent } from './electronics-item/electronics-item.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLoanTypeComponent } from './view-loan-type/view-loan-type.component';
import { ViewElectronicsItemComponent } from './view-electronics-item/view-electronics-item.component';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';
console.log("admin");

@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoanTypeComponent,
    ElectronicsItemComponent,
    ViewLoanTypeComponent,
    ViewElectronicsItemComponent,
    ViewApplicantComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
