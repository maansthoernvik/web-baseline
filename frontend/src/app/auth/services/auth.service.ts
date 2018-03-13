import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../../api-interface/request.service';

const LOGIN_URL = window.location.protocol + '//' + window.location.hostname + ':8000/api/login/';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private requestService: RequestService) { }

  login(username: string, password: string) {
    return this.requestService.post(LOGIN_URL, { username: username, password: password });
  }
}
