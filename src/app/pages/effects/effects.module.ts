import {NgModule} from '@angular/core';
import {EffectsRoutingModule} from "./effects-routing.module";
import {EffectsComponent} from './page/effects/effects.component';
import {CausesModule} from "../causes/causes.module";


@NgModule({
  imports: [EffectsRoutingModule, CausesModule],
  declarations: [
    EffectsComponent
  ],
  exports: []
})
export class EffectsModule {
}
