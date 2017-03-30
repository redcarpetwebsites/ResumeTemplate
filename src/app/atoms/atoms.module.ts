import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CircleImageComponent } from './circle-image/circle-image.component';
import { CircleimagemenuComponent } from './circleimagemenu/circleimagemenu.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, CircleImageComponent, CircleimagemenuComponent, HeaderTitleComponent, SocialMediaComponent, TitleComponent, SectionMenuComponent],
  exports: [ButtonComponent, CircleImageComponent, CircleimagemenuComponent, HeaderTitleComponent, SocialMediaComponent, TitleComponent]
})
export class AtomsModule { }
