import {Component, OnInit} from '@angular/core';
import {IArticleCard} from "../../../../interface/article/i-article-card";
import {IArticleDetail} from "../../../../interface/article/i-article-detail";

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {
  articles!: IArticleCard[];
  articlesDetails!: IArticleDetail[];

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
    this.articlesDetails = [
      {
        image: 'SeaLevel.png',
        title: 'Sea level rise',
        description: 'Sea level rise is a significant consequence of global warming caused by human activities. According to NASA\'s Vital Signs of the Planet, global sea levels have been rising at unprecedented rates over the past 2,500-plus years. This phenomenon is primarily caused by two factors related to global warming: the added water from melting ice sheets and glaciers, and the expansion of seawater as it warms. A graph on the website tracks the change in global sea level since 1993, as observed by satellites. It highlights the critical importance of reducing our carbon footprint and taking bold actions to mitigate climate change to avoid the severe consequences of sea-level rise.',
        dataSource: "National Aeronautics and Space Administration (NASA)",
        category: "Climate Science",
        url: 'https://climate.nasa.gov/vital-signs/sea-level/ ',
        data: new Date(),
      },
      {
        image: 'disasters.jpg',
        title: 'Extreme weather',
        description: 'Extreme weather events have become more frequent and severe in recent years, leading to devastating consequences for communities around the world. The United Nations report shows that climate change is the primary driver behind this increase in extreme weather events, leading to a rise of 83% in climate-related disasters over the past two decades. The report indicates that major floods have more than doubled, and the number of severe storms has increased by 40%, while droughts, wildfires, and heatwaves have also become more common. The impact of these events is not limited to environmental damage, but also has serious economic and human costs, resulting in global economic losses of $2.97 trillion and claiming 1.23 million lives. The report emphasizes the urgent need to invest in disaster prevention and preparedness, such as improving infrastructure, communication systems, and evacuation plans, to reduce the impacts of extreme weather events. It is crucial that we take action to address the root causes of climate change and work towards building more resilient communities that can better withstand the impacts of extreme weather events.',
        dataSource: "Carbon Brief",
        category: "Climate Change and Extreme Weather",
        url: 'https://www.carbonbrief.org/mapped-how-climate-change-affects-extreme-weather-around-the-world/ ',
        data: new Date(),
      },
      {
        image: 'livingPlanetIndex.png',
        title: 'Biodiversity loss',
        description: 'Biodiversity loss is a major environmental challenge that has been ongoing for several decades. One of the widely-used metrics to track this loss is the Living Planet Index (LPI), which measures the average change in population size of tens of thousands of animal populations. Since 1970, the LPI has reported an average decline of 69% in the size of animal populations for which data is available. However, it is important to note that the LPI data is not globally representative and some regions have more data available than others. Additionally, the LPI does not tell us the number of species lost, number of populations or individuals that have been lost, number or percentage of species or populations that are declining, or number of extinctions. For example, the number of extinctions due to habitat loss, climate change, and human activities has been increasing rapidly. Some of the species that have gone extinct in recent years include the golden toad in Costa Rica, the Pyrenean ibex in Spain, and the po’ouli bird in Hawaii. The loss of biodiversity is not limited to these examples, and many more species are at risk of extinction due to human activities such as deforestation, overfishing, pollution, and climate change.',
        dataSource: "Our World in Data",
        category: "Biodiversity",
        url: 'https://ourworldindata.org/biodiversity ',
        data: new Date(),
      }
    ]
  }


}
