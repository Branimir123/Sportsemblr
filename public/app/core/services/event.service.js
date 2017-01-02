"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EventService.prototype.getAllEvents = function () {
        return this.http.get('/api/events')
            .map(function (res) { return res.json(); });
    };
    EventService.prototype.getNotFinishedEvents = function () {
        return this.http.get('/api/ongoingevents')
            .map(function (res) { return res.json(); });
    };
    EventService.prototype.createEvent = function (description, sport, date, peopleNeeded, price, contactPhone, place) {
        var body = {
            sport: sport,
            date: date.toString(),
            peopleNeeded: peopleNeeded,
            price: price,
            contactPhone: contactPhone,
            place: place,
            description: description
        };
        return this.http.post('/api/events', body, this.headers)
            .map(function (res) { return res.json(); });
    };
    EventService.prototype.getEventById = function (id) {
        return this.http.get("/api/events/" + id)
            .map(function (res) { return res.json(); });
    };
    EventService.prototype.editEvent = function (id, event) {
        return this.http.post("/api/events/" + id, event, this.headers)
            .map(function (res) { return res.json(); });
    };
    EventService.prototype.sendRequest = function (id) {
        return this.http.get("/api/events/" + id + "/join");
    };
    EventService.prototype.revokeRequest = function (id) {
        return this.http.get("/api/events/" + id + "/join");
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map