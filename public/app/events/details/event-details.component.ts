import { ActivatedRoute } from '@angular/router';
import { Event } from '../../core/models/event';
import { EventService } from '../../core/services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
    private event: Event;
    private id;

    constructor(private service: EventService, private route: ActivatedRoute) {
        this.event =this.event || new Event();
     }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.id = params['id'];

                this.service.getEventById(this.id)
                    .subscribe(res => {
                        this.event = res;
                        console.log(this.event)
                    });
            });
    }
}