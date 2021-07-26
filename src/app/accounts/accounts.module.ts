import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsDashboardComponent } from './accounts-dashboard/accounts-dashboard.component';


@NgModule({
  declarations: [
    AccountsDashboardComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
