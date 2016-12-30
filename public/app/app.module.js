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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_datetime_picker_1 = require("ng2-datetime-picker");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./guards/index");
var index_2 = require("./home/index");
var index_3 = require("./login/index");
var index_4 = require("./register/index");
var index_5 = require("./profile/index");
var index_6 = require("./alert/index");
var index_7 = require("./shared/index");
var index_8 = require("./core/services/index");
var index_9 = require("./events/index");
var index_10 = require("./pipes/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            ng2_datetime_picker_1.Ng2DatetimePickerModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_2.HomeComponent,
            index_3.LoginComponent,
            index_4.RegisterComponent,
            index_5.ProfileComponent,
            index_6.AlertComponent,
            index_7.NavigationComponent,
            index_9.EventsListComponent,
            index_9.EventShortComponent,
            index_9.CreateEventComponent,
            index_9.EventDetailsComponent,
            index_9.EditEventComponent,
            index_10.EventFilterPipe,
            index_10.SportFilterPipe,
            index_10.PlaceFilterPipe
        ],
        providers: [
            index_1.AuthGuard,
            index_8.UserService,
            index_8.EventService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map