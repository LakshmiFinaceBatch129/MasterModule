import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  apps:any[];
  constructor(private c:CommonService) { }

  ngOnInit(): void {
    this.getApplicant();
  }

  getApplicant()
  {
      this.c.getApplicant().subscribe(list=>
        {
              this.apps=list;
            for(let app of this.apps)
            {
              console.log(app.firstname);
              
            }
              
        })
  }
}
