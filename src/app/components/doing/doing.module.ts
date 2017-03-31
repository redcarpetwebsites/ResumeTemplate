import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import {DoingComponent} from './doing.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [DoingComponent],
  exports : [DoingComponent]
})
export class DoingModule { }
