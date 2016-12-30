import { EditEventComponent } from './events/edit/edit-event.component';
import { EventDetailsComponent } from './events/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProfileComponent } from './profile/index';
import { AuthGuard } from './guards/index';
import { EventsListComponent } from './events/index';

const appRoutes: Routes = [
    { path: '', component: EventsListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: 'events/edit/:id', component: EditEventComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: './' }
];

export const routing = RouterModule.forRoot(appRoutes);