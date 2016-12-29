import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../core/models/event';
import { EventService } from '../../core/services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './edit-event.component.html'
})
export class EditEventComponent implements OnInit {
    private model: Event;
    private id;

    constructor(private service: EventService, private route: ActivatedRoute, private router: Router) { }

    editEvent() {
        this.service.editEvent(this.id, this.model)
            .subscribe(event => {
                let url = `/events/${event._id}`;
                this.router.navigateByUrl(url);
            });
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.id = params['id'];
                this.service.getEventById(this.id)
                    .subscribe(res => {
                        this.model = res;
                    });
            });
    }
}