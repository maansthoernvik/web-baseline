import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

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
    console.log(username);
    const password = form.value.password;
    console.log(password);
    this.auth.login(username, password).subscribe(
      success => {
        console.log('Success logging in.');
        console.log(success);
      },
      error => {
        console.log('Error logging in.');
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }
}
