import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    trigger('box', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('550ms ease-out')
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(550, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ContactFormComponent implements OnInit {

  form!: UntypedFormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  successMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      fname: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      lname: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      subject: new UntypedFormControl('', 
        Validators.minLength(5)
      ),
      message: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(15)
      ])
    })
  }

  get formInput() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.valid) {
      this.form.reset();
      setTimeout(() => {
        this.successMessage = true;
      }, 500);
      setTimeout(() => {
        this.successMessage = false;
      }, 4500)
    } 
  }
  
}
