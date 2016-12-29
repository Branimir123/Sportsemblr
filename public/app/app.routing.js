"use strict";
var edit_event_component_1 = require("./events/edit/edit-event.component");
var event_details_component_1 = require("./events/event-details.component");
var create_event_component_1 = require("./events/create-event.component");
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./register/index");
var index_3 = require("./events/index");
var appRoutes = [
    { path: '', component: index_3.EventsListComponent },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'events', component: index_3.EventsListComponent },
    { path: 'events/new', component: create_event_component_1.CreateEventComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: 'events/edit/:id', component: edit_event_component_1.EditEventComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: './' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map