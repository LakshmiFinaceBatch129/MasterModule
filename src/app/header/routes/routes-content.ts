import { Routes } from '@angular/router';

export const routesContent: Routes =[
    {path:'admin',loadChildren:() => import('src/app/admin/admin.module').then(m => m.AdminModule)},
    {path:'applicant',loadChildren:() => import('src/app/applicant/applicant.module').then(m => m.ApplicantModule)},
    {path:'relation',loadChildren:() => import('src/app/relation/relation.module').then(m => m.RelationModule)},
    {path:'operation',loadChildren:() =>import ('src/app/operation/operation.module').then(m =>m.OperationModule)},
    {path:'credit-manager',loadChildren:() =>import ('src/app/credit-manager/credit-manager.module').then(m =>m.CreditManagerModule)},
    {path:'accounts',loadChildren:() =>import ('src/app/accounts/accounts.module').then(m =>m.AccountsModule)}
 
    ]
 