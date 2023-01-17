import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  

  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  //***********************************************PartsDetails***************************************************



PartsData:any = [
  { 
    Name: "Ferrari F12",
    ModalNo: "F12",
    Parts: "Engine"
  },
  {
    Name: "Enzo Ferrari",
    ModalNo: "F40",
    Parts: "Battery"
  },
];
selectedIndex: any;

isEditClicked = false;

partsForm:FormGroup;

constructor(private formBuilder:FormBuilder) {
  this.partsForm = this.formBuilder.group({
    Name:[''],
    ModalNo:[''],
    Parts:['']
  })
 }

ngOnInit(): void {
}

update(i:any){

  this.isEditClicked = true;
  this.selectedIndex = i;
  
    this.partsForm.patchValue({
      Name:this.PartsData[i].Name,
      ModalNo:this.PartsData[i].ModalNo,
      Parts:this.PartsData[i].Parts
  })

}

partsubmit(){
  this.PartsData.push(this.partsForm.value);
  this.partclose()
}

partupdate(){
  this.PartsData[this.selectedIndex].Name = this.partsForm.value.Name
  this.PartsData[this.selectedIndex].ModalNo = this.partsForm.value.ModalNo
  this.PartsData[this.selectedIndex].Parts = this.partsForm.value.Parts 

  this.isEditClicked = false;
  this.partclose()
}

partclose(){
  this.partsForm.reset();
}


partdelete(i:any){
  this.PartsData.splice(i,1);
}


}
