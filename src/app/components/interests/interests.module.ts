import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import {InterestsComponent} from './interests.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [InterestsComponent],
  exports : [InterestsComponent]
})
export class InterestsModule { }
