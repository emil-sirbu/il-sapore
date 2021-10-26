import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  form!: FormGroup;
  email!: AbstractControl;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public dialog: MatDialog, 
                         fb: FormBuilder) {
      this.form = fb.group({
        'email': ['', [
          Validators.pattern(this.emailPattern)
        ]]
      }); 

      this.email = this.form.controls['email'];
   }

  openDialog() {
    this.dialog.open(BookingFormComponent);
  }

  submit(): void {
    if (this.form.valid) {
      this.form.reset()
    } 
  }
}
