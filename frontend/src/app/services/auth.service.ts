import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  // Toogle Loggedin
  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state);
  }

  // Status
  status() {
    const localData: any = localStorage.getItem('user');
    if (!localData) {
      this.isLoggedIn.next(false);
       console.log('User not logged in !!');
    } else {
      const userObj = JSON.parse(localData);
      const token_expires_at = new Date(userObj.token_expires_at);
      const current_date = new Date();
      if (token_expires_at > current_date) {
        this.isLoggedIn.next(true);
      } else {
        this.isLoggedIn.next(false);
         console.log('Token Expires!!');
      }
    }
    return this.isLoggedIn.asObservable();
  }

  signInUser(email: string, password: string){
    return this.httpClient.post('http://ecommerce.test/api/login', {
      email: email,
      password: password,
    });
  }

  signUpUser(name: string, email: string, password: string){
    const data = {
      name: name,
      email: email,
      password: password
    }
    return this.httpClient.post('http://ecommerce.test/api/register', data);
  }

  //user Info
  getUser() {
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get('http://ecommerce.test/api/user', {
      headers: headers,
    });
  }

  // Logout
  logout(allDevice: boolean){
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post('http://ecommerce.test/api/logout', {allDevice:allDevice}, {headers:headers});
  }

  
}
