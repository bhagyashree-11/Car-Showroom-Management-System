import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  // modalRef?: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  //***************************************************StaffDetail***********************************************************


StaffData:any = [
  { 
    Name: "Vishal Wath",
    Gender: "Male",
    Post: "Finance Manager",
    Mobile: "9371804015" 
  },
  {
    Name: "Shivani Wath",
    Gender: "Female",
    Post: "Sales Manager",
    Mobile: "9371804015"
  },
];

selectedIndex: any;

isEditClicked = false;

staffForm:FormGroup;

constructor(private formBuilder:FormBuilder) { 
  this.staffForm = this.formBuilder.group({
    Name:[''],
    Gender:[''],
    Post:[''],
    Mobile:['']
  })
}

  ngOnInit(): void {
  }

  update(i:any){

    this.isEditClicked = true;
    this.selectedIndex = i;
    
      this.staffForm.patchValue({
        Name:this.StaffData[i].Name,
        Gender:this.StaffData[i].Gender,
        Post:this.StaffData[i].Post,
        Mobile:this.StaffData[i].Mobile
    })
  
  }


staffsubmit(){
  this.StaffData.push(this.staffForm.value);
  this.staffclose()
}

staffupdate(){
  this.StaffData[this.selectedIndex].Name = this.staffForm.value.Name
  this.StaffData[this.selectedIndex].Gender = this.staffForm.value.Gender
  this.StaffData[this.selectedIndex].Post = this.staffForm.value.Post
  this.StaffData[this.selectedIndex].Mobile = this.staffForm.value.Mobile

  this.isEditClicked = false;
  this.staffclose()
}

staffclose(){
  this.staffForm.reset();
}

staffdelete(i:any){
  this.StaffData.splice(i,1);
}


}