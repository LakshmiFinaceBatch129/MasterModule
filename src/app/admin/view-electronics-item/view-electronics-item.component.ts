import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-electronics-item',
  templateUrl: './view-electronics-item.component.html',
  styleUrls: ['./view-electronics-item.component.css']
})
export class ViewElectronicsItemComponent implements OnInit {

  allItems:any[]
  constructor(private common:CommonService, private _router:Router) { }

  ngOnInit(): void {
    this.getElectronicsItem()
  }
  getElectronicsItem()
  {
   this.common.getElectronicsItem().subscribe(list=>
    {
      this.allItems=list;
    })
  }
  onDelete(id:number)
  {
    this.common.deleteElectronicsItem(id).subscribe();
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
        this.onDelete(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this._router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this._router.navigate(['header/admin/view-electronic-item'])})
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
