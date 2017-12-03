import { Component, OnInit } from '@angular/core';
import { TriviaItem } from './TriviaItem';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  granCanariaQuestion: TriviaItem = {
    question: 'Hoe heet de hoogste top van Gran Canaria',
    answer: 'Geen idee',
    input: '',
    code: '1234'
}

  constructor() { }

  ngOnInit() {
  }

}
