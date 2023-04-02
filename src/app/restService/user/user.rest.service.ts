import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interface/user/i-user";

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  private baseUrl = 'http://localhost:8000/user';
  private list: string = this.baseUrl + '/list';

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.list);
  }
}
