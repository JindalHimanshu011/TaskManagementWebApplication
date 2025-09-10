import { Component, inject } from '@angular/core';
import { UserRegister } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // activeForm: string = 'login';
  // registerObj: UserRegister = new UserRegister();
  // userservice = inject(UserService);
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
      alert("Login Successfully");
      debugger;
      this.router.navigate(['/dashboard']);
    }
    else {
      alert("Please enter valid username and password");
    }
  }

  // onRegister(){
  //   this.userservice.registerUser(this.registerObj);
  //   alert("Registered Successfully");
  //   this.registerObj = new UserRegister();
  //   this.activeForm = 'login';
  // }


  // switchForm(formName: string) {
  //   this.activeForm = formName; 
  // }

}
