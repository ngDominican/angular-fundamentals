import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Talk } from '../../models/talk';

@Component({
  selector: 'app-talks',
  template: `
    <app-talk *ngFor="let talk of talks | filter:filterBy" [talk]="talk"></app-talk>
  `
})
export class TalksComponent {

  @Input() talks: Talk[] = [];
  @Input() filterBy: string;

}
