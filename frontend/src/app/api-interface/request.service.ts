import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class RequestService {
  csrfToken = '';

  constructor(private httpClient: HttpClient) {
  }

  getCSRFToken() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      const re = new RegExp('^csrftoken');
      if (re.test(cookie)) {
        //this.csrfToken = cookie;
        this.csrfToken = decodeURIComponent(cookie.substr(10, cookie.length)); // remove csrftoken=
        break;
      }
    }
    console.log('[RequestService] Got token: ' + this.csrfToken);

    if (this.csrfToken === '') {
      return 'empty';
    } else {
      return this.csrfToken;
    }
  }

  get(url: string) {
    return this.httpClient.get(url);
  }

  post(url: string, body: {}) {
    return this.httpClient.post(url, body);
  }

  put() {}

  delete() {}
}
