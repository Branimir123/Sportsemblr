import { Component, Input } from '@angular/core';
import { RequestService } from '../../core/services/request.service';

@Component({
    moduleId: module.id,
    selector: 'event-request',
    templateUrl: './event-request.component.html'
})
export class EventRequestComponent {
    @Input() request: any;

    constructor(private requestService: RequestService) {

    }

    private acceptRequest(eventRequest: any) {
        return this.requestService.acceptRequest(this.request)
            .subscribe(res => {
                console.log(res);
            });
    }
}
