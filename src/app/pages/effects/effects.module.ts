import {NgModule} from '@angular/core';
import {EffectsRoutingModule} from "./effects-routing.module";
import {EffectsComponent} from './page/effects/effects.component';
import {CausesModule} from "../causes/causes.module";
import {CommonModule} from "@angular/common";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";


@NgModule({
  imports: [EffectsRoutingModule, CausesModule, CommonModule, NzImageModule, NzSkeletonModule],
  declarations: [
    EffectsComponent
  ],
  exports: []
})
export class EffectsModule {
}
