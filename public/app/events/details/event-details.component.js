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
var router_1 = require("@angular/router");
var event_1 = require("../../core/models/event");
var event_service_1 = require("../../core/services/event.service");
var core_1 = require("@angular/core");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.event = this.event || new event_1.Event();
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.service.getEventById(_this.id)
                .subscribe(function (res) {
                _this.event = res;
                _this.currentUser = JSON.parse(localStorage.getItem('currentUser')).username;
                _this.userCanVote = _this.event.participants.map(function (p) { return p.username; }).indexOf(_this.currentUser) > -1;
                console.log(!_this.event.sentRequests.find(function (r) { return r.user === _this.currentUser; }));
                console.log(!!_this.event.participants.find(function (p) { return p.username === _this.currentUser; }));
                _this.userCanJoin = !_this.event.sentRequests.find(function (r) { return r.user === _this.currentUser; }) && !_this.event.participants.find(function (p) { return p.username === _this.currentUser; });
            });
        });
    };
    EventDetailsComponent.prototype.askToJoin = function () {
        var _this = this;
        this.service.sendRequest(this.id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.userCanJoin = false;
            }
        });
    };
    return EventDetailsComponent;
}());
EventDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './event-details.component.html'
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, router_1.ActivatedRoute])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map