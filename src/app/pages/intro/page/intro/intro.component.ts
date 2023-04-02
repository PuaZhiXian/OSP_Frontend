import {Component, OnInit} from '@angular/core';
import {UserRestService} from "../../../../restService/user/user.rest.service";
import {IUser} from "../../../../interface/user/i-user";
import {finalize} from "rxjs";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private userRestService: UserRestService) {
  }

  loading: boolean = true;
  users!: IUser[];


  ngOnInit(): void {
    this.userRestService.getUser()
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .subscribe((resp) => {
        this.users = resp;
        console.log(this.users);
      })
  }
}
