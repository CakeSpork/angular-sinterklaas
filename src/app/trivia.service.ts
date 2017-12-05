import { Injectable } from '@angular/core';
import { TriviaItem } from './trivia/TriviaItem';
import { TRIVIA_ITEMS } from './trivia-items';

@Injectable()
export class TriviaService {

  constructor() { }

  getTriviaItems(): TriviaItem[] {
    return TRIVIA_ITEMS
  }

  getTriviaItemByTitle(title: string): TriviaItem {
    return TRIVIA_ITEMS.find(e => e.title === title);
  }
}
