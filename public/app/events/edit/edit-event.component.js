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
var EditEventComponent = (function () {
    function EditEventComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.model = this.model || new event_1.Event();
    }
    EditEventComponent.prototype.editEvent = function () {
        var _this = this;
        this.service.editEvent(this.id, this.model)
            .subscribe(function (event) {
            var url = "/events/" + event._id;
            _this.router.navigateByUrl(url);
        });
    };
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.service.getEventById(_this.id)
                .subscribe(function (res) {
                _this.model = res;
            });
        });
    };
    return EditEventComponent;
}());
EditEventComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './edit-event.component.html'
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, router_1.ActivatedRoute, router_1.Router])
], EditEventComponent);
exports.EditEventComponent = EditEventComponent;
//# sourceMappingURL=edit-event.component.js.map