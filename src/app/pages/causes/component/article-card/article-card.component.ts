import {Component, Input, OnInit} from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() articles!: IArticleCard[];
  @Input() isCausePage!: boolean;
  path!: string;

  ngOnInit(): void {
    if (this.isCausePage) {
      this.path = "assets/images/cause/";
    } else {
      this.path = "assets/images/effects/"
    }
  }

}
