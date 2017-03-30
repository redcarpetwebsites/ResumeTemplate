import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';

import {ProfileComponent} from './profile.component';

import {ProfiledescriptionModule} from '../../components/profiledescription/profiledescription.module';


@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    ProfiledescriptionModule
  ],
  declarations: [ProfileComponent],
  exports : [ProfileComponent]
})
export class ProfileModule { }
