import { Event } from './../core/models/event';
import { EventService } from './../core/services/index';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    description: String;
    sport: String;
    date: Date;
    peopleNeeded: Number;
    price: Number;
    contactPhone: string;
    place: String;

    constructor(private eventService: EventService) {
    }

    create() {
        this.eventService.createEvent(this.description, this.sport, this.date, this.peopleNeeded, this.price, this.contactPhone, this.place)
            .subscribe(res => {
                console.log(res);
            });
    }
}
