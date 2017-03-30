import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CircleImageComponent} from './circle-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CircleImageComponent],
  exports : [CircleImageComponent]
})
export class CircleImageModule { }
