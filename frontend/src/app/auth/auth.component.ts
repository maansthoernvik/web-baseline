import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BaseResultSetInterface} from "../api-interface/base-result-set.interface";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  users: any;
  groups: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('admin:password123'));
    // btoa() needs to be used since the Authorization header uses base64 encoding!
    // Without it, the request will fail with error code 401, unauthorized since it
    // cannot decode the request header.
    this.http.get<BaseResultSetInterface>(
      'http://localhost:8000/api/users/',
      { headers: headers }
    ).subscribe(
      data => {
        console.log(data);
        this.users = data.results;
      },
      err => {
        console.log(err);
      });

    this.http.get<BaseResultSetInterface>(
      'http://localhost:8000/api/groups/',
      { headers: headers }
    ).subscribe(
      data => {
        console.log(data);
        this.groups = data.results;
      },
      err => {
        console.log(err);
      });
  }

}
