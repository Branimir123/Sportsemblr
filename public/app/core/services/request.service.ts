import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RequestService {
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    acceptRequest(eventRequest: any) {
        return this.http.post(`/api/events/${eventRequest.eventId}/join`, eventRequest, this.headers)
            .map(res => res.json());
    }
}