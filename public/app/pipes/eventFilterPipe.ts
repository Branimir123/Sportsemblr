import { Event } from '../core/models/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eventFilterPipe'
})

export class EventFilterPipe implements PipeTransform {
    transform(movies: Event[], filter: string): any {
        if (filter) {
            return movies.filter(m => {
                return m.sport
                    .toLocaleLowerCase()
                    .indexOf(filter) > -1;
            });
        }

        return movies;
    }
}