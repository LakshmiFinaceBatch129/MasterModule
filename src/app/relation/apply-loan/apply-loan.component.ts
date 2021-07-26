import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  allItems:any;
  allLoan:any;
  applicantId:number;
  applicant:any;
  loanForm:FormGroup;
  constructor(private c:CommonService, private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.applicantId=this.route.snapshot.params.id;
    console.log(this.applicantId);
    
    this.createLoginForm();
    this.getApplicant()
    this. getElectronicsItem();
    this.getLoanType();
    this.loanForm.get('applicant').get('id').setValue(this.applicantId);
    console.log( this.loanForm.get('applicant').get('id').value);
  }
  createLoginForm()
  {
    this.loanForm=this.fb.group({
     
      applicant:this.fb.group({
        id:['',Validators.required],
      }),

      electronicsItem:this.fb.group({
        id:['',Validators.required],
      }),

      loanType:this.fb.group({
        id:['',Validators.required],
      }),

      bankDetails:this.fb.group({
        bankName:['',Validators.required],

        branchName:['',Validators.required],
        ifscNo:['',Validators.required],
        accountType:['',Validators.required],
        accountNo:['',Validators.required],
        averageCreditBalance:['',Validators.required],
      }),
     
      incomeStatement:this.fb.group({
        grossSalary:['',Validators.required],
        netSalary:['',Validators.required],
      
      }),

    })
  }
  getApplicant()
  {
      this.c.getApplicant().subscribe(list=>
        {
              this.applicant=list;
            for(let app of this.applicant)
            {
              console.log(app.firstname);
              
            }
              
        })
  }
  getElectronicsItem()
  {
   this.c.getElectronicsItem().subscribe(list=>
    {
      this.allItems=list;
    })
  }
  getLoanType()
  {
    this.c.getLoanType().subscribe(list=>
      {
       
        this.allLoan=list;
      })
  }
onSubmit()
{
  this.c.applyForLoan(this.loanForm.value).subscribe();
}
}
