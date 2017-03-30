import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CircleImageModule} from '../../atoms/circle-image/circle-image.module';

import {ProfiledescriptionModule} from '../../components/profiledescription/profiledescription.module';
import {HeaderTitleComponent} from '../../atoms/header-title/header-title.component';
import {ProfileinfoComponent} from '../../components/profileinfo/profileinfo.component';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    CircleImageModule,
    ProfiledescriptionModule
  ],
  declarations: [HeaderTitleComponent,ProfileinfoComponent,ProfileComponent],
  exports : [ProfileComponent]
})
export class ProfileModule { }
