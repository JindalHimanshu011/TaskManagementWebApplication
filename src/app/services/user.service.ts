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

  getUserbyId(Id: number) {
    const data = localStorage.getItem('data');
    const parsed = data ? JSON.parse(data) : [];
    const currentList = Array.isArray(parsed) ? parsed : [];
    const currentUser = currentList.find(user => user.Id == Id);
    return currentUser;
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
      for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].Id == newUser.Id) {
          currentList[i].Name = newUser.Name;
          currentList[i].Email = newUser.Email;
          currentList[i].Phone = newUser.Phone;
          currentList[i].Address = newUser.Address;
          break;
        }
      }
    }
    else {
      newUser.Id = Math.max(...currentList.map(user => user.Id));
      newUser.Id += 1;
      currentList.push(newUser);
    }

    localStorage.setItem('data', JSON.stringify(currentList));
  }
}
