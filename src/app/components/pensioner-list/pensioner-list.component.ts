import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-pensioner-list',
  templateUrl: './pensioner-list.component.html',
  styleUrls: ['./pensioner-list.component.css']
})
export class PensionerListComponent implements OnInit {

  pensionerList=[{
    aadhaarNumber:"",
    name:"",
    dateOfBirth:"",
    panNumber:"",
    salary:null,
    allowance:null,
    pensionType:"",
  }];

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.getPensioner();
  }

  private getPensioner()
  {
    this.loginService.getPensionerList().subscribe(
      data=>{
        this.pensionerList=data;
        console.log(this.pensionerList);
      }
    );
  }
  

}
