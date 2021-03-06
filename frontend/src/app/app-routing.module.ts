import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AuthGuardService } from './auth/guards/auth-guard.service';

/*
To add child routes of a parent path:
{ path: ParentPath, component: ParentComponent, children: [
  { path: ChildPath1, component: ChildComponent1 },
  { path: ChildPath2, component: ChildComponent2 }
] }

To add guards:
{ path: Path, component: Component, canActivate: [<Guard>, <Guard>, ...] }

Or for all children:
{ path: Path, component: Component, canActivateChild: [<Guard>, <Guard>, ...] }

NOTE! canDeactivate can be used to prevent navigation before saving changes.
 */

const appRoutes: Routes = [
  // Need to match full path of an empty path since it will match everything otherwise.
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'auth', component: AuthComponent },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [
    // Take in and configure the RouterModule
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    // Exports the configured RouterModule
    RouterModule
  ]
})
export class AppRoutingModule {}
