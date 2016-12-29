"use strict";
var event_details_component_1 = require("./events/event-details.component");
var create_event_component_1 = require("./events/create-event.component");
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./events/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'events', component: index_4.EventsListComponent },
    { path: 'events/new', component: create_event_component_1.CreateEventComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: './' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map