import { Component, OnInit } from '@angular/core';

import { RequestService } from './api-interface/request.service';
import { AuthService } from './auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Longest web app title in the fucking universe';

  constructor(private requestService: RequestService,
              private authService: AuthService) {}

  ngOnInit() {
    this.requestService.get('http://localhost:8000/api/csrf/')
      .subscribe(
        next => {
          this.authService.login('', '');
        }
    );
  }
}
