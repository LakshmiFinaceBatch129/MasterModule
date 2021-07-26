import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationRoutingModule } from './relation-routing.module';
import { RelationDashboardComponent } from './relation-dashboard/relation-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RelationDashboardComponent,
    ApplicantListComponent,
    ApplyLoanComponent
  ],
  imports: [
    CommonModule,
    RelationRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RelationModule { }
