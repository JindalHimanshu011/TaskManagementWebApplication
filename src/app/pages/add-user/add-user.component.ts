import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { UserService as Userservice } from '../../services/user.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReuseComponent } from "../reusable/reuse/reuse.component";
@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule, ReuseComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  UserId!: any;
  Id: number = 0;
  Name: string = "";
  Email: string = "";
  Phone: string = "";
  Address: string = "";


  addUserForm: FormGroup = new FormGroup({
    Id: new FormControl(this.Id),
    Name: new FormControl(this.Name, [Validators.required]),
    Email: new FormControl(""),
    Phone: new FormControl(""),
    Address: new FormControl("")
  });

  constructor(private router: Router, private route: ActivatedRoute, private userservice: Userservice) {
    const isvalid = this.addUserForm.valid;
  }

  ngOnInit() {
    this.UserId = this.route.snapshot.paramMap.get('Id');
    if (this.UserId) {
    const currentUser = this.userservice.getUserbyId(this.UserId);
    this.Name = currentUser.Name;
    this.Id = currentUser.Id;
    this.Email = currentUser.Email;
    this.Phone = currentUser.Phone;
    this.Address = currentUser.Address;
    }
  }




  onSubmit() {
    const formValue = this.addUserForm.value;
    this.userservice.addUser(formValue);
    alert("Data Saved Successfully");
    this.router.navigate(['/dashboard']);
  }
}
