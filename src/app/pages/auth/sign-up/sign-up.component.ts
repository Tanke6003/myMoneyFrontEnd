import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators}  from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { JwtPlugin } from '../../../core/utilities/jwt.plugin';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  providers: [AuthService],
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
  jwtutilidad:JwtPlugin = new JwtPlugin();
  constructor(private router: Router,private auth:AuthService) {
    let decode = this.jwtutilidad.decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    console.log(decode);
  }
  signUp() {
    this.auth.signUp(this.signUpForm.value).subscribe((data:any) => {
      console.log("Inside signUp method");
      console.log(data);
    });
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
