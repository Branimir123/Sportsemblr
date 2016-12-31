import { Event } from '../../core/models/event';
import { EventService } from '../../core/services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'list-events.component.html'
})
export class EventsListComponent implements OnInit {
    private events: Event[];
    private sports: String[];
    private places: String[];

    private filterProperty: string;
    private sportFilterProperty: string;
    private placeFilterProperty: string;

    constructor(private service: EventService) {
        this.filterProperty = '';
    }

    ngOnInit() {
        this.service.getNotFinishedEvents()
            .subscribe(res => {
                this.events = res;

                this.getSports();
                this.getPlaces();
            });
    }

    private getSports() {
        this.sports = [''];

        this.events.forEach(e => {
            let sport = e.sport.toLocaleUpperCase();

            if (this.sports.indexOf(sport) < 0) {
                this.sports.push(sport);
            }
        });
    }

    private getPlaces() {
        this.places = [''];

        this.events.forEach(e => {
            let place = e.place.toLocaleUpperCase();
            if (this.places.indexOf(place) < 0) {
                this.places.push(place);
            }
        });
    }
}