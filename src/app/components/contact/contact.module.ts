import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atoms/atoms.module';
import {ContactComponent} from './contact.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [ContactComponent],
  exports:[ContactComponent]
})
export class ContactModule { }
