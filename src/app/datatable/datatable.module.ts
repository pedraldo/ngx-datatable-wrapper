import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDatatableComponent } from './datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [MyDatatableComponent],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports: [MyDatatableComponent]
})
export class DatatableModule { }
