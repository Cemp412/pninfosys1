import { Component, OnInit } from '@angular/core';
import { TempService } from '../temp.service';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  alert:boolean=false;
 
  constructor(private temp:TempService) { }

  ngOnInit(): void {
  }
  contactForm =new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    message:new FormControl('')
 })

 collectData()
  {
    this.temp.saveContact(this.contactForm.value).subscribe((result)=>{
      console.log(result)
      this.alert=true;
      })
      this.contactForm.reset({})

  }


}
