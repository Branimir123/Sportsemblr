import { PlayerRatingComponent } from './rating/player-rating.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProfileComponent } from './profile/index';
import { UsersComponent, UsersListComponent, RequestsComponent, EventRequestComponent } from './users/index';
import { AlertComponent } from './alert/index';
import { NavigationComponent, FooterComponent } from './shared/index';

import { UserService, EventService, RequestService, RatingService } from './core/services/index';

import { EventsListComponent, EventShortComponent, CreateEventComponent, EventDetailsComponent, EditEventComponent } from './events/index';

import { EventFilterPipe, SportFilterPipe, PlaceFilterPipe, RemainingTimePipe } from './pipes/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        Ng2DatetimePickerModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        UsersComponent,
        AlertComponent,
        NavigationComponent,
        EventsListComponent,
        EventShortComponent,
        CreateEventComponent,
        EventDetailsComponent,
        EditEventComponent,
        FooterComponent,
        PlayerRatingComponent,
        UsersListComponent,
        EventRequestComponent,
        RequestsComponent,

        EventFilterPipe,
        SportFilterPipe,
        PlaceFilterPipe,
        RemainingTimePipe
    ],
    providers: [
        AuthGuard,
        UserService,
        EventService,
        RatingService,
        RequestService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }