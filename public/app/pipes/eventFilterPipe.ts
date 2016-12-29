import { Event } from '../core/models/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eventFilterPipe'
})

export class EventFilterPipe implements PipeTransform {
    transform(events: Event[], filter: string): any {
        if (filter) {
            filter = filter.toLocaleLowerCase();
            return events.filter(m => {
                let result =
                    m.sport
                        .toLocaleLowerCase()
                        .indexOf(filter) > -1 ||
                    m.description
                        .toLocaleLowerCase()
                        .indexOf(filter) > -1 ||
                    m.place
                        .toLocaleLowerCase()
                        .indexOf(filter) > -1;

                return result;
            });
        }

        return events;
    }
}