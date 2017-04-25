import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThoughtsComponent} from './thoughts.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ThoughtsComponent],
  exports : [ThoughtsComponent]
})
export class ThoughtsModule { }
