import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  

  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  //****************************************BillingData********************************************



BillingData:any = [
  { 
    Car: "Ferrari 250 GTO",
    CustomerName: "Pranali Wath",
    BookingAmount: "1 cr",
    BookedDate: "2022-08-10" ,
    TotalAmount: "5 cr"

  },
  {
    Car: "Ferrari F430",
    CustomerName: "Pratik Wath",
    BookingAmount: "1 cr",
    BookedDate: "2022-08-10" ,
    TotalAmount: "5 cr"
  },
];

selectedIndex: any;

isEditClicked = false;

billingForm:FormGroup;

constructor(private formBuilder:FormBuilder) { 
  this.billingForm = this.formBuilder.group({
    Car:[''],
    CustomerName:[''],
    BookingAmount:[''],
    BookedDate:[''],
    TotalAmount:['']
  })
}

ngOnInit(): void {
}


update(i:any){

  this.isEditClicked = true;
  this.selectedIndex = i;
  
    this.billingForm.patchValue({
      Car:this.BillingData[i].Car,
      CustomerName:this.BillingData[i].CustomerName,
      BookingAmount:this.BillingData[i].BookingAmount,
      BookedDate:this.BillingData[i].BookedDate,
      TotalAmount:this.BillingData[i].TotalAmount
  })

}

billingsubmit(){
  this.BillingData.push(this.billingForm.value);
  this.billingclose()
}

billingupdate(){
  this.BillingData[this.selectedIndex].Car = this.billingForm.value.Car
  this.BillingData[this.selectedIndex].CustomerName = this.billingForm.value.CustomerName
  this.BillingData[this.selectedIndex].BookingAmount = this.billingForm.value.BookingAmount
  this.BillingData[this.selectedIndex].BookedDate = this.billingForm.value.BookedDate
  this.BillingData[this.selectedIndex].TotalAmount = this.billingForm.value.TotalAmount


  this.isEditClicked = false;
  this.billingclose()
}

billingclose(){
  this.billingForm.reset();
}

billingdelete(i:any){
  this.BillingData.splice(i,1);
}
}
