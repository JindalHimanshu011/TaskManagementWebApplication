import { Injectable } from '@angular/core';
import { UserRegister } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


   getUsers(): UserRegister[] {
    const users = localStorage.getItem('data');
    return users ? JSON.parse(users) : [];
  }

  addUser(newUser: UserRegister): void {
    const data = localStorage.getItem('data');
    const parsed = data ? JSON.parse(data) : [];
    const  currentList = Array.isArray(parsed) ? parsed : [];
    
    currentList.push(newUser);
    localStorage.setItem('data', JSON.stringify(currentList));
  }

  // registerUser(obj: UserRegister) {
  //   localStorage.setItem('data', JSON.stringify(obj));
  // }
}
