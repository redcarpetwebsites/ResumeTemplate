import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import { MenuComponent } from "./menu.component";
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }
