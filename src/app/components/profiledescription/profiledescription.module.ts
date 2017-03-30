import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';

import {ProfiledescriptionComponent} from './profiledescription.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [ProfiledescriptionComponent],
  exports : [ProfiledescriptionComponent]
})
export class ProfiledescriptionModule { }
