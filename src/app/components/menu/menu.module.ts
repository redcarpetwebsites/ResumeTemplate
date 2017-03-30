import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CircleimagemenuComponent} from '../../atoms/circleimagemenu/circleimagemenu.component';
import {MenuComponent} from "./menu.component";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CircleimagemenuComponent,MenuComponent],
  exports : [MenuComponent]
})
export class MenuModule { }
