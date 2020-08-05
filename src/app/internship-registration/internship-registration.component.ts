import { Component, OnInit } from '@angular/core';
import { TempService } from '../temp.service';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-internship-registration',
  templateUrl: './internship-registration.component.html',
  styleUrls: ['./internship-registration.component.css']
})
export class InternshipRegistrationComponent implements OnInit {
  alert:boolean=false
  constructor(private temp:TempService) { }

  ngOnInit(): void {
  }

  registrationForm =new FormGroup({
    student_name:new FormControl(''),
    email:new FormControl(''),
    mobile_no:new FormControl(''),
    address:new FormControl(''),
    gender:new FormControl(''),
    college:new FormControl(''),
    qualification:new FormControl(''),
    branch:new FormControl(''),
    semester:new FormControl(''),
    course:new FormControl(''),

 })

 collectData()
  {
    this.temp.saveRegister(this.registrationForm.value).subscribe((result)=>{
      console.log(result)
      this.alert=true;
      })
      this.registrationForm.reset({})

  }

}
