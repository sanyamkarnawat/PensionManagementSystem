import { Component, OnInit } from '@angular/core';
import { PensionerServiceService } from 'src/services/pensioner-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pension-disburse',
  templateUrl: './pension-disburse.component.html',
  styleUrls: ['./pension-disburse.component.css']
})
export class PensionDisburseComponent implements OnInit {
  credentials={
    aadhaarNumber:'',
    pensionAmount:null,
    bankServiceCharge:null,
  }
  result:any;

  constructor(private pensionService:PensionerServiceService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.pensionService.processPension(this.credentials).subscribe(
      (data:any)=>
      {
        console.log(data);
        
        this.result=Object.values(data);

        if(this.result==10)
        {
          Swal.fire('Congratualtions!', 'Pension successfully disbursed!', 'success');
        }
        if(this.result==21)
        {
          Swal.fire('Error!', "Pension can't be disbursed!", 'error');
        }
      },
      error=>
      {
        console.log(error);
        
      }
    );
  }

}
