import {NgModule} from '@angular/core';
import {FutureRoutingModule} from "./future-routing.module";
import {FutureComponent} from './page/future/future.component';


@NgModule({
  imports: [FutureRoutingModule],
  declarations: [
    FutureComponent
  ],
  exports: []
})
export class FutureModule {
}
