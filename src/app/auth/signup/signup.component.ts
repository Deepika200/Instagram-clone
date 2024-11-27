import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup; // Reactive form group
  isSubmitted = false; // To track form submission

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with validators
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, this.confirmPasswordValidator.bind(this)]],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  // Password Match Validator
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  // Custom validator to ensure confirm password matches the password
  confirmPasswordValidator(control: any) {
    if (this.signupForm) {
      const password = this.signupForm.get('password')?.value;
      return control.value === password ? null : { notMatching: true };
    }
    return null;
  }

  // Method triggered on form submission
  onSignup() {
    this.isSubmitted = true;
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;

      // Simulate backend sign-up process (e.g., store data in local storage, or call API)
      console.log('Sign-up Successful:', { email, password });
      alert('Sign-up Successful!');
      this.router.navigate(['/auth/login']); // Redirect to Login after successful signup
    } else {
      console.log('Invalid form');
    }
  }
}
