import { Component, OnInit } from '@angular/core';
import { RequestService } from '../api-interface/request.service';
import { EventHandlerService } from './services/event-handler.service';




@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  alarms: any[];

  constructor(private requestService: RequestService,
              private eventHandler: EventHandlerService) { }

  ngOnInit() {
    this.eventHandler.events.subscribe(
      next => {
        console.log("Event subscription next: ");
        this.alarms.push(next);
      },
      error => {
        console.log("Event subscription error");
      },
      () => {
        console.log("Event subscription completed");
      }
    );
  }

  pushEvent() {
    this.requestService.get(EventHandlerService.TEST_EVENT_URL);
  }
}
