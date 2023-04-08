import {NgModule} from '@angular/core';
import {SolutionsRoutingModule} from "./solutions-routing.module";
import {SolutionComponent} from './page/solution/solution.component';
import {CausesModule} from "../causes/causes.module";


@NgModule({
    imports: [SolutionsRoutingModule, CausesModule],
  declarations: [
    SolutionComponent
  ],
  exports: []
})
export class SolutionsModule {
}
