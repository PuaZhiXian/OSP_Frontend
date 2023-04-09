import { Component, OnInit } from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";
import {ArticleConstant} from "../../../../constant/article/article-constant";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  events! : IArticleCard[];

  ngOnInit(){
    this.events = ArticleConstant.eventArticleCard;
  }

  openEventDetail(index: number){
    window.open("http://localhost:4200/future/"+index, "_blank");
  }

  openSpotlight(link: string){
    window.open(link, "_blank")
  }
}
