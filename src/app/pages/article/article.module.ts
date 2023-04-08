import {NgModule} from '@angular/core';
import {ArticleDetailComponent} from "./page/article-detail/article-detail.component";
import {ArticleRoutingModule} from "./article-routing.module";


@NgModule({
  imports: [ArticleRoutingModule],
  declarations: [
    ArticleDetailComponent
  ],
  exports: []
})
export class ArticleModule {
}
