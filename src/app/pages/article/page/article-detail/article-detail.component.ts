import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IArticleDetail} from "../../../../interface/article/i-article-detail";
import {ArticleConstant} from "../../../../constant/article/article-constant";

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  index!: string | null;
  articleDetail !: IArticleDetail;

  constructor(private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.index = this.actRoute.snapshot.paramMap.get('index');
    if (this.index != null) {
      this.articleDetail = ArticleConstant.articlesDetails[+this.index];
    }
  }
}
