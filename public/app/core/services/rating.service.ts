import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RatingService {
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    ratePlayers(players: string[], currentLoggedUser: string) {
        return this.http.post('/api/rating', { players, user: currentLoggedUser }, this.headers);
    }
}