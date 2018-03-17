import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import {BaseResultSetInterface} from "./base-result-set.interface";

@Injectable()
export class RequestService {
  csrfToken = '';

  constructor(private httpClient: HttpClient) {}

  getCSRFToken() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      const re = new RegExp('^csrftoken');
      if (re.test(cookie)) {
        this.csrfToken = decodeURIComponent(cookie.substr(10, cookie.length)); // remove csrftoken=
        break;
      }
    }
    return this.csrfToken;
  }

  get(url: string) {
    return this.httpClient.get<BaseResultSetInterface>(url);
  }

  post(url: string, body: {}) {
    // Add { observe: 'response' } to get mode than just the response body back.
    return this.httpClient.post(url, body);
  }

  put() {}

  delete() {}
}
