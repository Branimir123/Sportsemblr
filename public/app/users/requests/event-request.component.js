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
var request_service_1 = require("../../core/services/request.service");
var EventRequestComponent = (function () {
    function EventRequestComponent(requestService) {
        this.requestService = requestService;
    }
    EventRequestComponent.prototype.acceptRequest = function (eventRequest) {
        var _this = this;
        return this.requestService.acceptRequest(this.request)
            .subscribe(function (res) {
            console.log(res);
            _this.accepted = true;
        });
    };
    return EventRequestComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventRequestComponent.prototype, "request", void 0);
EventRequestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'event-request',
        templateUrl: './event-request.component.html'
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], EventRequestComponent);
exports.EventRequestComponent = EventRequestComponent;
//# sourceMappingURL=event-request.component.js.map