import {NgModule} from '@angular/core';
import {IntroRoutingModule} from "./intro-routing.module";
import { IntroComponent } from './page/intro/intro.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzCardModule} from "ng-zorro-antd/card";
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [IntroRoutingModule, NzLayoutModule, NzImageModule, NzCardModule, NzIconModule, NzSkeletonModule, CommonModule],
  declarations: [
    IntroComponent
  ],
  exports: []
})
export class IntroModule {
}
