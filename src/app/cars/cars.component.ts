import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  

  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  //****************************************Cars Detail****************************************




CarsData:any = [
  { 
    CarName: "Ferrari F12",
    City: "Nagpur",
    State: "Maharashtra",
    Country: "India",
    ContactNo: "9371804015",
    Pincode: "440008", 
  },
  {
    CarName: "Enzo Ferrari",
    City: "Delhi",
    State: "Madhya Pradesh", 
    Country: "India",
    ContactNo: "8411099837",
    Pincode: "450035", 
  },
];
selectedIndex: any;

isEditClicked = false;

carsForm:FormGroup;

constructor(private formBuilder:FormBuilder) { 
  this.carsForm = this.formBuilder.group({
    CarName:[''],
    City:[''],
    State:[''],
    Country:[''],
    ContactNo:[''],
    Pincode:['']
  })
}

ngOnInit(): void {
}

update(i:any){

  this.isEditClicked = true;
  this.selectedIndex = i;
  
    this.carsForm.patchValue({
      CarName:this.CarsData[i].CarName,
      City:this.CarsData[i].City,
      State:this.CarsData[i].State,
      Country:this.CarsData[i].Country,
      ContactNo:this.CarsData[i].ContactNo,
      Pincode:this.CarsData[i].Pincode
  })

}

submit(){
  this.CarsData.push(this.carsForm.value);
  this.close()
}

update0(){
  this.CarsData[this.selectedIndex].CarName = this.carsForm.value.CarName
  this.CarsData[this.selectedIndex].City = this.carsForm.value.City
  this.CarsData[this.selectedIndex].State = this.carsForm.value.State
  this.CarsData[this.selectedIndex].Country = this.carsForm.value.Country
  this.CarsData[this.selectedIndex].ContactNo = this.carsForm.value.ContactNo
  this.CarsData[this.selectedIndex].Pincode = this.carsForm.value.Pincode

  this.isEditClicked = false;
  this.close()
}

close(){
  this.carsForm.reset();
}

delete(i:any){
  this.CarsData.splice(i,1);
}


}
