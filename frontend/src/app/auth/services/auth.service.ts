import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../../api-interface/request.service';
import { Observable } from "rxjs/Observable";

const LOGIN_URL = window.location.protocol + '//' + window.location.hostname + ':8000/api/login/';

@Injectable()
export class AuthService {
  private authenticated: boolean;

  constructor(private http: HttpClient,
              private requestService: RequestService) {}

  login(username: string, password: string) {
    return new Observable<boolean>(subscriber => {
      this.requestService.post(LOGIN_URL, {username: username, password: password})
        .subscribe(
          success => {
            this.authenticated = true;
            console.log("Auth service success");
            subscriber.next();
          },
          error => {
            console.log("Auth service error");
            subscriber.error();
          },
          () => {
            console.log("Auth service completed");
            subscriber.complete();
          }
        );
    });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
