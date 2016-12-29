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
var EventFilterPipe = (function () {
    function EventFilterPipe() {
    }
    EventFilterPipe.prototype.transform = function (events, filter) {
        if (filter) {
            filter = filter.toLocaleLowerCase();
            return events.filter(function (m) {
                var result = m.sport
                    .toLocaleLowerCase()
                    .indexOf(filter) > -1 ||
                    m.description
                        .toLocaleLowerCase()
                        .indexOf(filter) > -1 ||
                    m.place
                        .toLocaleLowerCase()
                        .indexOf(filter) > -1;
                return result;
            });
        }
        return events;
    };
    return EventFilterPipe;
}());
EventFilterPipe = __decorate([
    core_1.Pipe({
        name: 'eventFilterPipe'
    }),
    __metadata("design:paramtypes", [])
], EventFilterPipe);
exports.EventFilterPipe = EventFilterPipe;
//# sourceMappingURL=eventFilterPipe.js.map