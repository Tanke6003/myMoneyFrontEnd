import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators}  from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router,) {

  }
  signUp() {
    console.log(this.signUpForm.value);
  }
  
  validatePassword() {
    if (this.signUpForm.value.password != this.signUpForm.value.confirmPassword) {
      console.log("passwords don't match");
      this.signUpForm.controls['confirmPassword'].setErrors({ 'incorrect': true });
    }
  }
  goToSignIn() {
    this.router.navigate(['/sign-in']);
  }

}
