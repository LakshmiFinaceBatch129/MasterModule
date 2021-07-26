import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationDashboardComponent } from './operation-dashboard/operation-dashboard.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    OperationDashboardComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    MaterialModule
  ]
})
export class OperationModule { }
