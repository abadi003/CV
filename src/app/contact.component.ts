import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  title = 'CV';
  form:FormGroup
  constructor(){
    this.form= new FormGroup({
      firstName:new FormControl(null , Validators.required),
      lastName:new FormControl(null , Validators.required),
      email:new FormControl(null , [Validators.required,Validators.email]),
      message:new FormControl(null , Validators.required)
    })
  }

  submit(){

  }

}
