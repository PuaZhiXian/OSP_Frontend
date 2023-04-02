import {NgModule} from '@angular/core';
import {CausesRoutingModule} from "./causes-routing.module";
import {CausesComponent} from './page/causes/causes.component';


@NgModule({
  imports: [CausesRoutingModule],
  declarations: [
    CausesComponent
  ],
  exports: []
})
export class CausesModule {
}
