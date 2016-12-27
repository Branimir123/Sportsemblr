import { Event } from './../core/models/event';
import { EventService } from './../core/services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'list-events.component.html'
})
export class EventsListComponent implements OnInit {
    private events: Event[];

    constructor(private service: EventService) { }

    ngOnInit() {
        this.service.getAllEvents()
            .subscribe(res => {
                this.events = res;
            });
    }
}