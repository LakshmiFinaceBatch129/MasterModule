import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-loan-type',
  templateUrl: './view-loan-type.component.html',
  styleUrls: ['./view-loan-type.component.css']
})
export class ViewLoanTypeComponent implements OnInit {

  allLoan:any[];
  constructor( private common:CommonService, private _router:Router) { }

  ngOnInit(): void {
    this.getLoanType()
  }
  getLoanType()
  {
    this.common.getLoanType().subscribe(list=>
      {
       
        this.allLoan=list;
      })
  }
  onDelete(id:number)
  {
    this.common.deleteLoanLoanType(id).subscribe();
  }
  delete(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.onDelete(id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this._router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this._router.navigate(['header/admin/view-loan-type'])})
      }  
       else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your file is safe :)',
          'error'
        )
      }
    })
  }
  }

