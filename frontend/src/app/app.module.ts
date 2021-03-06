import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// My modules
import { AppRoutingModule } from './app-routing.module';

// My components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';

// My services
import { AuthService } from './auth/services/auth.service';
import { RequestService } from './api-interface/request.service';
import { EventHandlerService } from './events/services/event-handler.service';
import { EventListenerService } from './events/services/event-listener.service';

// My guards
import { AuthGuardService } from './auth/guards/auth-guard.service';

// Interceptors
import { AuthRequestInterceptor } from './auth/interceptors/auth-request.interceptor';
import { AuthResponseInterceptor } from './auth/interceptors/auth-response.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // The module imported will be the exported RouterModule from AppRoutingModule
    AppRoutingModule
  ],
  // Guards and services go here! Guards are essentially services.
  providers: [
    AuthService,
    AuthGuardService,
    RequestService,
    EventListenerService,
    EventHandlerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
