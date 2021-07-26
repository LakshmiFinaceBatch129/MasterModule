import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditManagerRoutingModule } from './credit-manager-routing.module';
import { CreditDashboardComponent } from './credit-dashboard/credit-dashboard.component';


@NgModule({
  declarations: [
    CreditDashboardComponent
  ],
  imports: [
    CommonModule,
    CreditManagerRoutingModule
  ]
})
export class CreditManagerModule { }
