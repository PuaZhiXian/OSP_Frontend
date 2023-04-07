import {NgModule} from '@angular/core';
import {EventsRoutingModule} from "./events-routing.module";
import {EventsComponent} from "./page/events/events.component";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzAvatarModule} from "ng-zorro-antd/avatar";


@NgModule({
  imports: [EventsRoutingModule, NzImageModule, NzAvatarModule],
  declarations: [
    EventsComponent
  ],
  exports: []
})
export class EventsModule {
}
