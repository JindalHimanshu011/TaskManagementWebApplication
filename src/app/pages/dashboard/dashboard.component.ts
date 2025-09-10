import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService as Userservice } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  loading = true;
  error = '';




  dashboardFrom: FormGroup = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private router: Router, private userservice: Userservice) {
    const isvalid = this.dashboardFrom.valid;
  }

  ngOnInit(): void {
    debugger;
    const data = localStorage.getItem('data');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        this.items = Array.isArray(parsed) ? parsed : [];
        this.loading = false;
      } catch (e) {
        console.error('Failed to parse items from localStorage', e);
        this.error = 'Failed to load records';
        this.loading = false;
      }
    }
  }

  // onSubmit() {
  //   const formValue = this.dashboardFrom.value;
  //   this.userservice.addUser(formValue);
  //   alert("Data Saved Successfully");
  // }
}
