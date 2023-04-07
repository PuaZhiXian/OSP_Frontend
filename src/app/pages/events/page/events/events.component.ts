import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  eventImages: string[]= [];
  eventNames: string[] = [];
  spotlight = [];

  ngOnInit(){
    this.eventImages = ["assets/images/intro/cat.jpg","assets/images/intro/cat.jpg","assets/images/intro/cat.jpg","assets/images/intro/cat.jpg"];
    this.eventNames = ["Event","Event","Event","Event"];
  }
}
