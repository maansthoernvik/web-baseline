import { Injectable } from '@angular/core';
import { RequestService } from '../../api-interface/request.service';
import { BehaviorSubject } from "rxjs/BehaviorSubject";


const BASE_URL = window.location.protocol + '//' + window.location.hostname + ':8000/api/';
const LOGIN_URL = BASE_URL + 'login/';
const LOGOUT_URL = BASE_URL + 'logout/';


@Injectable()
export class AuthService {
  authSubject: BehaviorSubject<boolean>;

  constructor(private requestService: RequestService) {
    this.authSubject = new BehaviorSubject<boolean>(false);
  }

  login(username: string, password: string) {
    this.requestService.post(LOGIN_URL, { username: username, password: password })
      .subscribe(
        next => {
          this.authSubject.next(true);
          console.log("[AuthService] Success logging in.");
        });
  }

  logout() {
    this.requestService.post(LOGOUT_URL, {})
    .subscribe(
      next => {
        this.authSubject.next(false);
        console.log('[AuthService] Success logging out.');
      });
  }

  isAuthenticated(): boolean {
    return this.authSubject.getValue();
  }
}
