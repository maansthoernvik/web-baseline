import { Component, OnInit } from '@angular/core';
import { RequestService } from '../api-interface/request.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { pipe } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.get('http://localhost:8000/api/csrf/').subscribe();
  }
}
