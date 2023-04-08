import {Component, OnInit} from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";
import {IArticleDetail} from "../../../../interface/article/i-article-detail";
import {ArticleRestService} from "../../../../restService/article/article.rest.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {
  articles!: IArticleCard[];
  articlesDetails!: IArticleDetail[];
  loadingArticle: boolean = true;


  constructor(private articleRestService: ArticleRestService) {
  }

  ngOnInit(): void {
    this.initArticle();
    this.initArticleDetail();
  }

  initArticle() {
    this.articles = [
      {
        image: 'Sea level rise.webp',
        title: 'Rising Sea Levels',
        description: "As temperatures rise, glaciers and ice sheets melt, causing sea levels to rise. This can lead to flooding of coastal cities, erosion of shorelines, and destruction of coastal habitats such as wetlands and coral reefs.",
      },
      {
        image: 'hurricane.webp',
        title: 'Extreme weather',
        description: "Climate change is causing an increase in the frequency and severity of extreme weather events such as heatwaves, hurricanes, droughts, and floods. These events can result in property damage, loss of life, and displacement of communities.",
      },
      {
        image: 'Biodiversity loss.jpeg',
        title: 'Biodiversity loss',
        description: "Climate change is causing changes in ecosystems that are putting many species of plants and animals at risk of extinction. This loss of biodiversity can lead to imbalances in ecosystems and negatively impact human food and water supplies.",
      }
    ]
  }

  initArticleDetail() {
    this.articleRestService.getArticle()
      .pipe(finalize(() => {
        this.loadingArticle = false;
      }))
      .subscribe((resp) => {
        this.articlesDetails = resp;
        console.log(resp)
      })
  }

  openArticleDetail(index: number) {
    window.open('http://localhost:4200/article/' + index, "_blank");
  }


}
