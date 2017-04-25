import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import {ResumeComponent} from './resume.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [ResumeComponent],
  exports : [ResumeComponent]
})
export class ResumeModule { }
