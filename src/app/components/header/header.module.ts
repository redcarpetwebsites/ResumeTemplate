import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  exports : [HeaderComponent]
})
export class HeaderModule { }
