import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.auth.login(username, password).subscribe(
      success => {
        console.log('[AuthComponent] Success logging in.');
      },
      error => {
        console.log('[AuthComponent] Error logging in.');
      }
    );
  }
}
