import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TalksService } from 'src/app/services/talks.service';
import { Talk } from 'src/app/models/talk';

@Component({
  selector: 'app-talk-detail',
  template: `
    <div class="content" *ngIf="talk">
        <img class="image" [src]="talk.imageUrl" />
        <h2>{{ talk.title }}</h2>
        <span><b>{{ talk.speaker }}</b> | {{ talk.duration }} minutes</span>
    
        <div class="description">
        <span>{{ talk.description }}</span>
        </div>
    </div>
  `,
  styles: []
})
export class TalkDetailComponent implements OnInit {

  talk: Talk;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private store: TalksService
  ) { }
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.talk = this.store.getTalkById(parseInt(id));

    if (!this.talk) {
      this.route.navigate(['not-found']);
    }
  }

}
