import { Component, OnInit } from '@angular/core';
import { RequestService } from './api-interface/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Longest web app title in the fucking universe';

  constructor(private request: RequestService) {}

  ngOnInit() {}
}
