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
    private currentUser: string;
    private userCanVote: boolean;

    constructor(private service: EventService, private route: ActivatedRoute) {
        this.event = this.event || new Event();
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.id = params['id'];

                this.service.getEventById(this.id)
                    .subscribe(res => {
                        this.event = res;
                        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).username;
                        this.userCanVote = this.event.participants.map(p => p.username).indexOf(this.currentUser) > -1;
                    });
            });
    }
}