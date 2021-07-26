import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.css']
})
export class LoanTypeComponent implements OnInit {

  allLoan:any[];
loanType:FormGroup;  
  constructor(private fb:FormBuilder, private _router:Router, private common:CommonService) {
    
   }

  ngOnInit(): void {
    this.loanType=this.fb.group({
      loanTitle:[''],
      loanDetail:['']
    })

  }
  onSubmit()
  {
    this.common.saveLoanType(this.loanType.value).subscribe();
    Swal.fire('Success...', 'Loan Type Added', 'success')
    this._router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this._router.navigate(['header/admin/view-loan-type'])})
  }
  

}
