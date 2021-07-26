import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private _fb:FormBuilder, private _common:CommonService, private _route:Router) { }

  ngOnInit(): void {
    this.loginForm=this._fb.group({
      username:['', Validators.required],
      password:['',Validators.required]
    })
  }
onLogin()
{
  console.log(this.loginForm.get('username').value);
  this._common.getUser(this.loginForm.value).subscribe(user=>
    {
      Swal.fire('Success...', 'Logged in Successfully..!', 'success');
      
          if(user.role=='Applicant')
              {
                this._route.navigate(['header/applicant']);
              }
              if(user.role=='Relationship Executive')
              {
                this._route.navigate(['header/relation']);
              }
              if(user.role=='Operation Executive')
              {
                this._route.navigate(['header/operation']);
              }
              if(user.role=='Admin')
              {
                this._route.navigate(['header/admin']);
              }
        },
        (error)=>{Swal.fire('Oops...', 'Something went wrong!', 'error')}
        )
}
}
