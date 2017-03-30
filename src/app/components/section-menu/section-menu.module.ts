import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import {SectionMenuComponent} from './section-menu.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [SectionMenuComponent],
  exports : [SectionMenuComponent,AtomsModule]
})
export class SectionMenuModule { }
