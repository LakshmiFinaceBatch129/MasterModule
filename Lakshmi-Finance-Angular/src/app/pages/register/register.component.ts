import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  registerForm:FormGroup;
  
  createLoginForm()
  {
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],

      person:this.fb.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        email:['',Validators.required],
        mobile:['',Validators.required],
      }),
     
      aadhar:['',Validators.required],
      pan:['',Validators.required],


    })
  }

onSubmit()
{
console.log(this.registerForm.value);
this.loginUser();

}

reset()
{
  this.registerForm.reset();
  
}

loginUser()
{
  this.userService.RegisteUser(this.registerForm.value).subscribe(data=>{
    console.log(data);
    Swal.fire('Success...', 'Applicant Registerd Successfully', 'success')
this.router.navigate(['/login']);

  },(error)=>{
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  })
}
}
