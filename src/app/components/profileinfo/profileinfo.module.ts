import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import {ProfileinfoComponent} from '../../components/profileinfo/profileinfo.component';


@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    
  ],
  declarations: [ProfileinfoComponent],
  exports : [ProfileinfoComponent]
})
export class ProfileinfoModule { }
