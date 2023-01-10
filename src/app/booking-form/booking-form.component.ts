import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
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
export class BookingFormComponent implements OnInit {

  form!: UntypedFormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  successBooking: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
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
        this.successBooking = true;
      }, 500);
      setTimeout(() => {
        this.successBooking = false;
      }, 4500)
    } 
  }

}
