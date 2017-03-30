import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from '../../atoms/button/button.module';
import {ProfiledescriptionComponent} from './profiledescription.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
    
  ],
  declarations: [],
  exports : [ProfiledescriptionModule]
})
export class ProfiledescriptionModule { }
