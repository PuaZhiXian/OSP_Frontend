import {NgModule} from '@angular/core';
import {SolutionsRoutingModule} from "./solutions-routing.module";
import {SolutionComponent} from './page/solution/solution.component';


@NgModule({
  imports: [SolutionsRoutingModule],
  declarations: [
    SolutionComponent
  ],
  exports: []
})
export class SolutionsModule {
}
