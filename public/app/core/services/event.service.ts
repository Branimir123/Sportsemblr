import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

import { Event } from '../models';

@Injectable()
export class EventService {
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    getAllEvents(): Observable<Event[]> {
        return this.http.get('/api/events')
            .map(res => <Event[]>res.json());
    }

    getNotFinishedEvents(): Observable<Event[]> {
        return this.http.get('/api/ongoingevents')
            .map(res => <Event[]>res.json());
    }

    createEvent(description: String,
        sport: String,
        date: Date,
        peopleNeeded: Number,
        price: Number,
        contactPhone: string,
        place: String) {

        let body = {
            sport,
            date: date.toString(),
            peopleNeeded,
            price,
            contactPhone,
            place,
            description
        }

        return this.http.post('/api/events', body, this.headers)
            .map(res => res.json());
    }

    getEventById(id) {
        return this.http.get(`/api/events/${id}`)
            .map(res => res.json());
    }

    editEvent(id, event) {
        return this.http.post(`/api/events/${id}`, event, this.headers)
            .map(res => res.json());
    }

    sendRequest(id) {
        return this.http.get(`/api/events/${id}/join`);
    }

    revokeRequest(id) {
        return this.http.get(`/api/events/${id}/join`);
    }
}