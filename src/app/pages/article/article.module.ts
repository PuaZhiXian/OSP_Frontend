import {NgModule} from '@angular/core';
import {ArticleDetailComponent} from "./page/article-detail/article-detail.component";
import {ArticleRoutingModule} from "./article-routing.module";
import {NzImageModule} from "ng-zorro-antd/image";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [ArticleRoutingModule, NzImageModule, CommonModule],
  declarations: [
    ArticleDetailComponent
  ],
  exports: []
})
export class ArticleModule {
}
