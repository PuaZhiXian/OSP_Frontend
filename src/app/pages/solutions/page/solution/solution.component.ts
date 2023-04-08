import {Component, OnInit} from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";
import {ArticleConstant} from "../../../../constant/article/article-constant";

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  articles!: IArticleCard[];

  ngOnInit(): void {
    this.articles = ArticleConstant.solutionArticleCard;
  }
}
