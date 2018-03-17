import { Component, OnInit } from '@angular/core';
import { RequestService } from '../api-interface/request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any[];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.get('http://localhost:8000/api/info/')
      .subscribe(
        next => {
          this.info = next.results;
        },
        error => {
          console.log("Failed getting info from API");
        }
      );
  }
}
