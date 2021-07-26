import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-operation-dashboard',
  templateUrl: './operation-dashboard.component.html',
  styleUrls: ['./operation-dashboard.component.css']
})
export class OperationDashboardComponent implements OnInit {
  files: any
  constructor(private c:CommonService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles()
  {
    this.c.getApplications().subscribe(data=>
      this.files=data 
      )
  }
 
     
  }


