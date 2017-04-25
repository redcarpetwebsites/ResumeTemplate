import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CircleImageComponent } from './circle-image/circle-image.component';
import { CircleimagemenuComponent } from './circleimagemenu/circleimagemenu.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TitleComponent } from './title/title.component';
import { CircleIconComponent } from './circle-icon/circle-icon.component';
import { BlockResumeComponent } from './block-resume/block-resume.component';
import { BlockResume2Component } from './block-resume2/block-resume2.component';
import { BarComponent } from './bar/bar.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ContactformComponent } from './contactform/contactform.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, CircleImageComponent, CircleimagemenuComponent, HeaderTitleComponent, SocialMediaComponent, TitleComponent, CircleIconComponent, BlockResumeComponent, BlockResume2Component, BarComponent, ContactinfoComponent, ContactformComponent],
  exports: [ButtonComponent, CircleImageComponent, CircleimagemenuComponent,CircleIconComponent, HeaderTitleComponent, SocialMediaComponent, TitleComponent,BlockResumeComponent,BlockResume2Component,BarComponent,ContactinfoComponent,ContactformComponent]
})
export class AtomsModule { }
