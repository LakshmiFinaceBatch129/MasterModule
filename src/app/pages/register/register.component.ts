import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private _fb:FormBuilder, private _common:CommonService, private _route:Router) { }

  ngOnInit(): void {
    this.registerForm=this._fb.group({
     person:this._fb.group({
      firstname:[''],
      lastname:[''],
      gender:[''],
      dob:[''],
      email:[''],
      mobile:[''],
      address:this._fb.group({
        city:[''],
        state:[''],
        district:[''],
        postalCode:[''],
        addressLine1:[]
      })
     }),
     username:[''],
     password:[''],
     aadhar:[''],
     pan:['']
    })
  }

  onSubmit()
  {
    
    this._common.registerApplicant(this.registerForm.value).subscribe();
    this._route.navigate(['/login']);
  }
}
