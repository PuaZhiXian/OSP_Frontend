import {Component, Input, OnInit} from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() articles!: IArticleCard[];
  @Input() path!: string;

  ngOnInit(): void {
  }

}
