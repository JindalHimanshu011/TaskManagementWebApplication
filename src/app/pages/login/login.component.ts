import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginFrom: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private router: Router) {
    const isvalid = this.loginFrom.valid;
  }


  onSubmit() {
    const formValue = this.loginFrom.value;
    if (formValue.username == localStorage.getItem('username') && formValue.password == localStorage.getItem('userpwd')) {
      this.router.navigate(['/dashboard']);
    }
    else {
      alert("Please enter valid username and password");
    }
  }

}
