import { Injectable } from '@angular/core';
import { Talk } from '../models/talk';
import { TALKS } from './mock';

@Injectable({
    providedIn: 'root'
})
export class TalksService {

  talks: Talk[] = TALKS;
  
  constructor() {}
  
  getTalkById(id: number) {
    return this.talks.find(talk => talk.id === id);
  }

}
