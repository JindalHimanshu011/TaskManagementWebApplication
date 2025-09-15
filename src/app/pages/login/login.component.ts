import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) {
    const isvalid = this.loginFrom.valid;
  }


  onSubmit() {
    const formValue = this.loginFrom.value;
    if (formValue.username == localStorage.getItem('username') && formValue.password == localStorage.getItem('userpwd')) {
      this.router.navigate(['/dashboard']);
      //this.authService.login();
      sessionStorage.setItem('isLoggedIn', 'true');
    }
    else {
      sessionStorage.setItem('isLoggedIn', 'false');
      alert("Please enter valid username and password");
    }
  }

}
