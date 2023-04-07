import {NgModule} from '@angular/core';
import {IntroRoutingModule} from "./intro-routing.module";
import { IntroComponent } from './page/intro/intro.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzCardModule} from "ng-zorro-antd/card";
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {CommonModule} from "@angular/common";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
    imports: [IntroRoutingModule, NzLayoutModule, NzImageModule, NzCardModule, NzIconModule, NzSkeletonModule, CommonModule, NzFormModule, NzInputModule, ReactiveFormsModule, NzButtonModule],
  declarations: [
    IntroComponent
  ],
  exports: []
})
export class IntroModule {
}
