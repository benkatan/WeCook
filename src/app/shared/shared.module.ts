import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardComponent } from './components/basic-card/basic-card.component';

@NgModule({
  declarations: [BasicCardComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicCardComponent]
})
export class SharedModule { }
