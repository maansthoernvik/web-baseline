import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BaseResultSetInterface} from "../api-interface/base-result-set.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<BaseResultSetInterface>(
      'http://localhost:8000/api/info/',
      { headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa('admin:password123')) }
    ).subscribe(
      data => {
        console.log(data);
        this.info = data.results;
      },
      err => {
        console.log(err);
      });
  }
}
