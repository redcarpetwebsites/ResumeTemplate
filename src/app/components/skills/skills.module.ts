import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { AtomsModule } from '../../atoms/atoms.module';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [SkillsComponent],
  exports: [SkillsComponent]
})
export class SkillsModule { }
