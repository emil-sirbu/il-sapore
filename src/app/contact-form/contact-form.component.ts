import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  form!: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  successMessage: boolean = false;

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
