import { Event } from '../core/models/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sportFilterPipe'
})

export class sportFilterPipe implements PipeTransform {
    transform(events: Event[], filter: string): any {
        if (filter) {
            filter = filter.toLocaleLowerCase();
            return events.filter(m => {
                return m.sport.toLocaleLowerCase() === filter;
            });
        }

        return events;
    }
}