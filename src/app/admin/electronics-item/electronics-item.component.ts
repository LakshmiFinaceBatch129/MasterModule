import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-electronics-item',
  templateUrl: './electronics-item.component.html',
  styleUrls: ['./electronics-item.component.css']
})
export class ElectronicsItemComponent implements OnInit {

  allItems:any;
  electronicsItem:FormGroup;
  constructor( private fb:FormBuilder, private router:Router, private common:CommonService) { }

  ngOnInit(): void {
    this.electronicsItem=this.fb.group({
      productName:[''],
      company:[''],
      serialId:[''],
      price:['']
    })
  }
  onSubmit()
  {
    this.common.saveElectronicsItem(this.electronicsItem.value).subscribe();
    Swal.fire('Success...', 'New Item Added', 'success');
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['header/admin/view-electronic-item'])});
  }
 
}
