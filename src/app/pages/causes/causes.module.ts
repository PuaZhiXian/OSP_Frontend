import {NgModule} from '@angular/core';
import {CausesRoutingModule} from "./causes-routing.module";
import {CausesComponent} from './page/causes/causes.component';
import {CommonModule} from "@angular/common";
import {NzImageModule} from "ng-zorro-antd/image";
import {ArticleCardComponent} from './component/article-card/article-card.component';


@NgModule({
  imports: [CausesRoutingModule, CommonModule, NzImageModule],
  declarations: [
    CausesComponent,
    ArticleCardComponent
  ],
  exports: [
    ArticleCardComponent
  ]
})
export class CausesModule {
}
