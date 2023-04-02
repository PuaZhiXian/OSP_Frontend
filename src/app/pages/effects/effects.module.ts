import {NgModule} from '@angular/core';
import {EffectsRoutingModule} from "./effects-routing.module";
import {EffectsComponent} from './page/effects/effects.component';


@NgModule({
  imports: [EffectsRoutingModule],
  declarations: [
    EffectsComponent
  ],
  exports: []
})
export class EffectsModule {
}
