import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authenticated: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authSubject.subscribe(
      next => {
        this.authenticated = next;
      }
    );
    this.authenticated = this.authService.isAuthenticated();
  }

  onLogin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.login(username, password);
  }

  onLogout() {
    this.authService.logout();
  }
}
