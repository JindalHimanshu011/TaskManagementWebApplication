import { Injectable } from '@angular/core';
import { UserRegister } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getUsers() {
    return localStorage.getItem('data');
  }

  deleteUser(Id: number): void {
    const data = localStorage.getItem('data');
    const parsed = data ? JSON.parse(data) : [];
    const currentList = Array.isArray(parsed) ? parsed : [];
    const updatedList = currentList.filter((user: UserRegister) => user.Id !== Id);
    localStorage.setItem('data', JSON.stringify(updatedList));
  }





  addUser(newUser: UserRegister): void {
    const data = localStorage.getItem('data');
    const parsed = data ? JSON.parse(data) : [];
    const currentList = Array.isArray(parsed) ? parsed : [];
    if (newUser.Id != 0) {
      alert("User with this ID already exists.");
    }
    else {
      newUser.Id = Math.max(...currentList.map(user => user.Id));
      newUser.Id += 1;
      currentList.push(newUser);
    }

    localStorage.setItem('data', JSON.stringify(currentList));
  }

  // registerUser(obj: UserRegister) {
  //   localStorage.setItem('data', JSON.stringify(obj));
  // }
}
