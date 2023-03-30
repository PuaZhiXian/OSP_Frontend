import { Component, OnInit } from '@angular/core';
import {TesterApiRestService} from "../../restService/testerApi/tester-api.rest.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private testApiRestService: TesterApiRestService) { }

  userList!: any[];

  ngOnInit() {
    this.phpTester();
  }

  phpTester(){
    this.testApiRestService.phpTester()
      .subscribe((resp)=>{
        console.log(resp);
        this.userList = resp;
      })
  }


}
