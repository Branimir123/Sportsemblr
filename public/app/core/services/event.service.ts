import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

import { Event } from '../models';

@Injectable()
export class EventService {
    constructor(private http: Http) { }

    getAllEvents(): Observable<Event[]> {
        return this.http.get('/api/events')
            .map(res => <Event[]>res.json());
    }
}