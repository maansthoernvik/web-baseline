import { Component, OnInit } from '@angular/core';
import { RequestService } from '../api-interface/request.service';
import { Event, EventHandlerService } from './services/event-handler.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  alarms: Event[];

  constructor(private requestService: RequestService,
              private eventHandler: EventHandlerService) { }

  ngOnInit() {
    this.alarms = [];
    this.eventHandler.events.subscribe(
      next => {
        this.alarms.push(next);
      }
    );
  }

  pushEvent() {
    this.requestService.get(EventHandlerService.TEST_EVENT_URL).subscribe();
  }
}
