import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  
  url:string="http://localhost:8888/";

  constructor(private _http:HttpClient) { }

getApplications():Observable<any>{
  return this._http.get<any>(this.url+"loanApplication/");
}

  // getApplicationForms():Observable<any>
  // {
  // return this._http.get<any>(this.url+"loanApplication/");
  // }

  getUser(loginForm:any):Observable<any> {
   return this._http.post<any>(this.url+"user/", loginForm)
  }
  registerApplicant(registerForm:any):Observable<any> {
   return this._http.post<any>(this.url+"admin/", registerForm)
  }
  saveLoanType(loanType:any):Observable<any>
  {
    return this._http.post<any>(this.url+"loanType/",loanType)
  }
  getLoanType():Observable<any[]>
  {
  return this._http.get<any[]>(this.url+"loanType/")
  }
  deleteLoanLoanType(id:number):Observable<number>
  {
    return this._http.delete<number>(this.url+"loanType/"+id);
  }

  saveElectronicsItem(item:any):Observable<any>
  {
    return this._http.post<any>(this.url+"electronicsItem/",item)
  }
  getElectronicsItem():Observable<any[]>
  {
  return this._http.get<any[]>(this.url+"electronicsItem/")
  }
  deleteElectronicsItem(id:number):Observable<number>
  {
    return this._http.delete<number>(this.url+"electronicsItem/"+id);
  }

  getApplicant():Observable<any[]>
  {
    return this._http.get<any[]>(this.url+"applicant/")
  }
  applyForLoan(loanForm: any):Observable<any> {
  return this._http.post<any>(this.url+"loanApplication/", loanForm)
  }
}
