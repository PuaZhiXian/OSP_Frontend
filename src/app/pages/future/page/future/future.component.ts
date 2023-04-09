import { Component, OnInit } from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";
import {ArticleConstant} from "../../../../constant/article/article-constant";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent implements OnInit{
  index!: string | null;
  eventImage!: string;
  eventTitle!: string;
  eventDescription!: string;
  event!:IArticleCard;

  constructor(private actRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.index = this.actRoute.snapshot.paramMap.get('index');
    if (this.index != null) {
      this.event = ArticleConstant.eventArticleCard[+this.index];
    }
    this.eventImage = this.event.image;
    this.eventTitle = this.event.title;
    this.eventDescription = this.event.description;
  }

}
