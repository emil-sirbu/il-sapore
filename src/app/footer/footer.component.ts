import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  form!: FormGroup;
  email!: AbstractControl;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(fb: FormBuilder) {
      this.form = fb.group({
        'email': ['', [
          Validators.pattern(this.emailPattern)
        ]]
      }); 

      this.email = this.form.controls['email'];
   }

  submit(): void {
    if (this.form.valid) {
      this.form.reset()
    } 
  }
}
