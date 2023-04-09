import {NgModule} from '@angular/core';
import {FutureRoutingModule} from "./future-routing.module";
import {FutureComponent} from './page/future/future.component';
import {NzImageModule} from "ng-zorro-antd/image";


@NgModule({
  imports: [FutureRoutingModule, NzImageModule],
  declarations: [
    FutureComponent
  ],
  exports: []
})
export class FutureModule {
}
