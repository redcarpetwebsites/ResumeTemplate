import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleComponent} from '../../atoms/title/title.component';
import {SocialMediaComponent} from '../../atoms/social-media/social-media.component';
import {CircleImageComponent} from '../../atoms/circle-image/circle-image.component';
import {HeaderComponent} from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent,SocialMediaComponent, CircleImageComponent,HeaderComponent],
  exports : [HeaderComponent]
})
export class HeaderModule { }
