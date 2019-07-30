import { Component, Input, OnInit } from '@angular/core';
import { Talk } from '../../models/talk';

@Component({
  selector: 'app-talk',
  template: `
    <div class="content">
        <img class="image" [src]="talk.imageUrl" />
        <div>
            <h2 [routerLink]="[talk.id]">{{ talk.title }}</h2>
            <b>{{ talk.speaker }}</b> | <span>{{ talk.duration }} minutes</span>
        </div>
    </div>
    <div class="actions">
        <button [ngClass]="{'active': talk.attended}" (click)="onAttend(talk)">
        {{ talk.attended ? 'Attended ✌🏼' : 'Waiting' }}
        </button>
    </div>
  `
})
export class TalkComponent {

  @Input() talk: Talk;
  
  onAttend(talk: Talk) {
    talk.attended = !talk.attended;
  }

}

