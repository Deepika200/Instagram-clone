import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup; // Reactive form group
  isSubmitted = false; // To track form submission

  constructor(private fb: FormBuilder) {
    // Initialize form group with validators
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method triggered on form submission
  onLogin() {
    this.isSubmitted = true; // Mark form as submitted
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Simulating backend response with hardcoded credentials
      if (email === 'test@example.com' && password === 'password123') {
        console.log('Login Successful');
        alert('Login Successful!');
        // TODO: Redirect to dashboard or home
      } else {
        console.log('Invalid Credentials');
        alert('Invalid Credentials');
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
