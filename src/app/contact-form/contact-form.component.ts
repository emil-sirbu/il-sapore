import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form!: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      subject: new FormControl('', 
        Validators.minLength(5)
      ),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(15)
      ])
    })
  }

  get formInput() {
    return this.form.controls
  }

  submit(): void {
    if (this.form.valid) {
      this.form.reset()
    } 
  }
}
