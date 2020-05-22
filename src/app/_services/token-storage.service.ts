import { Injectable } from '@angular/core';


// this service manages token and user information(username,email,roles)
// inside Browser's Session Storage

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  // for logOut - only need to clear this Session Storage
  signOut(){
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    sessionStorage.setItem('id',user.id);
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }


}
