import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../core/components/card/card.component';
import { OpenCloseComponent } from '../core/components/open-close/open-close.component';



@NgModule({
  declarations: [CardComponent, OpenCloseComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, OpenCloseComponent]
})
export class HeroesModule { }
