import {Component, OnInit} from '@angular/core';
import {IArticleDetail} from "../../../../interface/article/i-article-detail";
import {IArticleCard} from "../../../../interface/article/i-article-card";

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent implements OnInit {
  articles!: IArticleCard[];

  ngOnInit(): void {
    this.initArticle();
  }

  initArticle() {
    this.articles = [
      {
        image: 'burning fossil fuel.jpeg',
        title: 'Burning Fossil Fuels',
        description: "The burning of fossil fuels such as coal, oil, and gas releases large amounts of greenhouse gases (mainly carbon dioxide) into the atmosphere, which contributes to climate change. These greenhouse gases trap heat and cause the planet's temperature to rise.",
      }
      ,
      {
        image: 'Deforestation.jpeg',
        title: 'Deforestation',
        description: "Cutting down trees reduces their ability to absorb carbon dioxide through photosynthesis, and carbon stored in trees is released back into the atmosphere when forests are cleared.",
      },
      {
        image: 'Transportation Traffic-congestion.pbm',
        title: 'Transportation',
        description: "Fossil fuels used in cars, trucks, airplanes, and ships release carbon dioxide into the atmosphere, making transportation a significant contributor to greenhouse gas emissions.",
      },
      {
        image: 'Industry process.jpeg',
        title: 'Industrial Processes',
        description: "Industrial processes, such as cement production, also contribute to climate change through the release of greenhouse gases during the production and transportation of materials.",
      }
    ]
  }

}
