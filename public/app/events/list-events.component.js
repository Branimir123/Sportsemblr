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
var event_service_1 = require("./../core/services/event.service");
var core_1 = require("@angular/core");
var EventsListComponent = (function () {
    function EventsListComponent(service) {
        this.service = service;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllEvents()
            .subscribe(function (res) {
            _this.events = res;
        });
    };
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'list-events.component.html'
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=list-events.component.js.map