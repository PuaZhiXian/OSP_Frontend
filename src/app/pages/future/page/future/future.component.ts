import { Component } from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent {
  eventImage!: string;
  eventTitle!: string;
  eventDescription!: string;

  ngOnInit(event: IArticleCard){
    this.eventImage = event.image;
    this.eventTitle = event.title;
    this.eventDescription = event.description;
  }

  protected readonly event = event;
}
