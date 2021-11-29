import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardModule { }
