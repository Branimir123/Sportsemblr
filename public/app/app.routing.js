"use strict";
var index_1 = require("./events/index");
var router_1 = require("@angular/router");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./profile/index");
var appRoutes = [
    { path: '', component: index_1.EventsListComponent },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'profile', component: index_4.ProfileComponent },
    { path: 'events', component: index_1.EventsListComponent },
    { path: 'events/new', component: index_1.CreateEventComponent },
    { path: 'events/:id', component: index_1.EventDetailsComponent },
    { path: 'events/edit/:id', component: index_1.EditEventComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: './' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map