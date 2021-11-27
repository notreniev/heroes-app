import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCloseComponent } from './open-close.component';

@NgModule({
  declarations: [OpenCloseComponent],
  imports: [
    CommonModule
  ],
  exports: [OpenCloseComponent]
})
export class OpenCloseModule { }
