import { Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';

import { AuthService } from './auth.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  authenticated: boolean;

  private authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authSubject.subscribe(
      next => {
        this.authenticated = next;
      }
    );
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  login(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password);
  }

  logout() {
    this.authService.logout();
  }
}
