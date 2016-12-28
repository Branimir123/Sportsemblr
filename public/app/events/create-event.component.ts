import { Event } from './../core/models/event';
import { EventService } from './../core/services/index';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private eventService: EventService, private router: Router) {
    }

    create() {
        this.eventService.createEvent(this.description, this.sport, this.date, this.peopleNeeded, this.price, this.contactPhone, this.place)
            .subscribe(res => {
                console.log(res);
                let url = `/events/${res._id}`;
                console.log(url);
                this.router.navigateByUrl(url);
            });
    }
}
