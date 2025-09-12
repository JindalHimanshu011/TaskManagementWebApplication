import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService as Userservice } from '../../services/user.service';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  addUserForm: FormGroup = new FormGroup({
    Id: new FormControl(0),
    Name: new FormControl("", [Validators.required]),
    Email: new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Phone: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    Address: new FormControl("", [Validators.required])
  });

  constructor(private router: Router, private userservice: Userservice) {
    const isvalid = this.addUserForm.valid;
  }

  onSubmit() {
    const formValue = this.addUserForm.value;
    this.userservice.addUser(formValue);
    alert("Data Saved Successfully");
    this.router.navigate(['/dashboard']);
  }
}
