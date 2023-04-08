import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IArticleDetail} from "../../../../interface/article/i-article-detail";
import {finalize} from "rxjs";
import {ArticleRestService} from "../../../../restService/article/article.rest.service";

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  index!: string | null;
  articleDetail !: IArticleDetail;
  loadingArticleDetail: boolean = true;

  constructor(private actRoute: ActivatedRoute,
              private articleRestService: ArticleRestService) {
  }

  ngOnInit(): void {
    this.index = this.actRoute.snapshot.paramMap.get('index');
    if (this.index != null) {
      this.initArticleDetail(+this.index);
    }
  }

  initArticleDetail(index: number) {
    this.articleRestService.getArticle()
      .pipe(finalize(() => {
        this.loadingArticleDetail = false;
      }))
      .subscribe((resp) => {
        this.articleDetail = resp.filter(value => {
          return value.id == 'A' + index;
        })[0];
      })
  }
}
