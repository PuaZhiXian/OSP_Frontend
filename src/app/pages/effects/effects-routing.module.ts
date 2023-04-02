import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EffectsComponent} from "./page/effects/effects.component";

const routes: Routes = [
  {path: '', component: EffectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectsRoutingModule {
}
