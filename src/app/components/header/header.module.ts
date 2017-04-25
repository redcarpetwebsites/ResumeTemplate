import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../../atoms/atoms.module';
import { HeaderComponent } from './header.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
