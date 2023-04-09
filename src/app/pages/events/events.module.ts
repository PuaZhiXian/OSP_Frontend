import {NgModule} from '@angular/core';
import {EventsRoutingModule} from "./events-routing.module";
import {EventsComponent} from "./page/events/events.component";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NgForOf} from "@angular/common";


@NgModule({
    imports: [EventsRoutingModule, NzImageModule, NzAvatarModule, NgForOf],
  declarations: [
    EventsComponent
  ],
  exports: []
})
export class EventsModule {
}
