import { TableOptions, PaginationOptions, FilterOptions } from './datatable.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TableColumn, DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class MyDatatableComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  @Input() data: any[];
  @Input() columns: TableColumn[] = [];
  @Input() tableOptions: TableOptions = {
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto'
  };
  @Input() paginationOptions: PaginationOptions = {
    limit: 10
  };
  @Input() filterOptions: FilterOptions = {
    width: '30%'
  };

  ColumnMode = ColumnMode;
  filteredData: any[];

  constructor() { }

  ngOnInit(): void {
    this.filteredData = this.data;
  }

  public onFilterInputKeyup(event: Event): void {
    const val = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredData = this.data.filter(d => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;

    return;
  }

}
