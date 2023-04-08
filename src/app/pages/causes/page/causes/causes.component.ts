import {Component, OnInit} from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";
import {ArticleConstant} from "../../../../constant/article/article-constant";

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent implements OnInit {
  articles!: IArticleCard[];

  ngOnInit(): void {
    this.articles = ArticleConstant.causeArticleCard;
  }
}
