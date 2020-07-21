import { DatatableModule } from './../datatable/datatable.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';



@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule,
    DatatableModule
  ],
  exports: [WrapperComponent]
})
export class WrapperModule { }
