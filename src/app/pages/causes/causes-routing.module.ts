import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CausesComponent} from "./page/causes/causes.component";

const routes: Routes = [
  {path: '', component: CausesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CausesRoutingModule {
}
