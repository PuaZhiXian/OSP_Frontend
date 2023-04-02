import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FutureComponent} from "./page/future/future.component";

const routes: Routes = [
  {path: '', component: FutureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureRoutingModule {
}
