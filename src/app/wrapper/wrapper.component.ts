import { periodicElements } from './periodic-elements';
import { TableOptions, PaginationOptions, FilterOptions } from './../datatable/datatable.model';
import { TableColumn, ColumnMode } from '@swimlane/ngx-datatable';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  data: any[] = periodicElements;
  columns: TableColumn[] = [];
  tableOptions: TableOptions = {
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto'
  };
  paginationOptions: PaginationOptions = {
    limit: 10
  };
  filterOptions: FilterOptions = {
    width: '30%'
  };

  constructor() { }

  ngOnInit(): void {
    this.columns = [{
      name: 'Selection',
      prop: 'selector',
      checkboxable: true,
      headerCheckboxable: true
    }, {
      name: 'Position',
      prop: 'position'
    }, {
      name: 'Name',
      prop: 'name'
    }, {
      name: 'Date',
      prop: 'date'
    }, {
      name: 'Weigth',
      prop: 'weight'
    }, {
      name: 'Symbol',
      prop: 'symbol'
    }];
  }

}
