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
import { AlertComponent } from './alert/index';
import { NavigationComponent, SearchComponent } from './shared/index';
import { UserService, EventService } from './core/services/index';
import { EventsListComponent, EventShortComponent, CreateEventComponent } from './events/index';

import { EventFilterPipe } from './pipes/index';

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
        AlertComponent,
        NavigationComponent,
        EventsListComponent,
        EventShortComponent,
        CreateEventComponent,
        SearchComponent,

        EventFilterPipe
    ],
    providers: [
        AuthGuard,
        UserService,
        EventService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }