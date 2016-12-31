import { Component, Input } from '@angular/core';
import { Event } from '../../core/models/index';


@Component({
    moduleId: module.id,
    selector: 'event-short',
    templateUrl: 'event-short.component.html'
})
export class EventShortComponent {
    @Input() event: any;
}