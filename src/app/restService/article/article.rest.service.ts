import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interface/user/i-user";
import {IArticleDetail} from "../../interface/article/i-article-detail";

@Injectable({
  providedIn: 'root'
})
export class ArticleRestService {

  private baseUrl = 'http://localhost:8000/article';
  private list: string = this.baseUrl + '/list';

  constructor(private httpClient: HttpClient) {
  }

  getArticle(): Observable<IArticleDetail[]> {
    return this.httpClient.get<IArticleDetail[]>(this.list);
  }
}
