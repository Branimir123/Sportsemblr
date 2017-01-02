import { EditEventComponent, CreateEventComponent, EventDetailsComponent, EventsListComponent } from './events/index'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProfileComponent } from './profile/index';
import { UsersComponent, UsersListComponent } from './users/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: EventsListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'users/:username', component: UsersComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: 'events/edit/:id', component: EditEventComponent },
    { path: 'users', component: UsersListComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: './' }
];

export const routing = RouterModule.forRoot(appRoutes);