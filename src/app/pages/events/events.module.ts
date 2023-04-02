import {NgModule} from '@angular/core';
import {EventsRoutingModule} from "./events-routing.module";
import {EventsComponent} from "./page/events/events.component";


@NgModule({
  imports: [EventsRoutingModule],
  declarations: [
    EventsComponent
  ],
  exports: []
})
export class EventsModule {
}
