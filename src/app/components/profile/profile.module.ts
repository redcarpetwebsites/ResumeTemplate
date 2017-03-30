import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import {ProfiledescriptionModule} from '../../components/profiledescription/profiledescription.module';
import {ProfileinfoModule} from '../../components/profileinfo/profileinfo.module';
import {ProfileComponent} from './profile.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    ProfiledescriptionModule,
    ProfileinfoModule
  ],
  declarations: [ProfileComponent],
  exports : [ProfileComponent]
})
export class ProfileModule { }
