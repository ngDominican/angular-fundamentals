import { Component } from '@angular/core';
import { Talk } from '../models/talk';
import { TalksService } from '../services/talks.service';

@Component({
  selector: 'app-shell',
  template: `
    <div class="container">
      <app-filter (filter)="onFilter($event)"></app-filter>
      <app-talks [talks]="talks" [filterBy]="search"></app-talks>
    </div>
  `
})
export class ShellComponent {

  talks: Talk[];
  search: string;
  
  constructor(
    private talksService: TalksService
  ) {}

  ngOnInit() {
    this.talks = this.talksService.talks;
  }

  onFilter(search: string) {
    this.search = search;
  }

}
