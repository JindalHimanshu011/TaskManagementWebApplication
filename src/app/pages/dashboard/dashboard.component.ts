import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService as Userservice } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from '../add-user/add-user.component';
@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  loading = true;
  error = '';
  nameFilter: string = '';
  emailFilter: string = '';




  dashboardFrom: FormGroup = new FormGroup({
    Name: new FormControl(""),
    Email: new FormControl(""),
    Phone: new FormControl(""),
    Address: new FormControl("")
  });

  constructor(private router: Router, private userservice: Userservice) {
    const isvalid = this.dashboardFrom.valid;
  }

  ngOnInit(): void {
    const data = this.userservice.getUsers();
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

  filteredUsers() {

    return this.items.filter(user =>
      user.Name?.toLowerCase().includes(this.nameFilter.toLowerCase())
      && user.Email?.toString().includes(this.emailFilter)
    );
  }

  onDelete(Id: number) {
    this.userservice.deleteUser(Id);
    alert("User deleted sussessfully");
    this.ngOnInit();
  }
  update(Id: number) {
    alert("Are you sure to update this user? " + Id);
  }

}
