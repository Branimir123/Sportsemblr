import { Event } from '../core/models/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'placeFilterPipe'
})

export class PlaceFilterPipe implements PipeTransform {
    transform(events: Event[], filter: string): any {
        if (filter) {
            filter = filter.toLocaleLowerCase();
            return events.filter(m => {
                let result = m.place
                    .toLocaleLowerCase()
                    .indexOf(filter) > -1;

                return result;
            });
        }

        return events;
    }
}