import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private logedIn = false;

  isloggedIn() {
    return this.logedIn;
  }
  login() {
    this.logedIn = true;
  }
    logout() {
    this.logedIn = false;
  }
}