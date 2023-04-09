import {Component, OnInit} from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";
import {IArticleDetail} from "../../../../interface/article/i-article-detail";
import {ArticleRestService} from "../../../../restService/article/article.rest.service";
import {finalize} from "rxjs";
import {ArticleConstant} from "../../../../constant/article/article-constant";

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {
  articles!: IArticleCard[];
  articlesDetails!: IArticleDetail[];
  loadingArticle: boolean = true;


  constructor(private articleRestService: ArticleRestService) {
  }

  ngOnInit(): void {
    this.articles = ArticleConstant.effectArticleCard;
    this.initArticleDetail();
  }

  initArticleDetail() {
    this.articleRestService.getArticle()
      .pipe(finalize(() => {
        this.loadingArticle = false;
      }))
      .subscribe((resp) => {
        this.articlesDetails = resp;
        console.log(resp)
      })
  }

  openArticleDetail(index: number) {
    window.open('http://localhost:4200/events/' + index, "_blank");
  }


}
