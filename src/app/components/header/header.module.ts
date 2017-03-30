import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {TitleComponent} from '../../atoms/title/title.component';
import {SocialMediaComponent} from '../../atoms/social-media/social-media.component';
import {CircleImageModule} from '../../atoms/circle-image/circle-image.module';
import {HeaderComponent} from './header.component';

@NgModule({
  imports: [
    CommonModule,
    CircleImageModule
  ],
  declarations: [TitleComponent,SocialMediaComponent,HeaderComponent],
=======
import { AtomsModule } from '../../atoms/atoms.module';
import { HeaderComponent } from './header.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [HeaderComponent],
>>>>>>> b54f47a2ded04843d246f9ebacea309ffa5271aa
  exports : [HeaderComponent]
})
export class HeaderModule { }
