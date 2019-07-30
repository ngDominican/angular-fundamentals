import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    <input type="text" placeholder="Busca una charla" [ngModel]="search" (ngModelChange)="onModelChange($event)" />
  `
})
export class FilterComponent {

  search: string;
  @Output() filter = new EventEmitter<string>();

  constructor() {}

  onModelChange(evt: string) {
    this.filter.next(evt);
  }

}
