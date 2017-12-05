import { Component, OnInit } from '@angular/core';
import { TriviaItem } from '../trivia/TriviaItem';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  triviaItems: TriviaItem[] = [];

  constructor(private triviaService: TriviaService) {

  }

  ngOnInit() {
    this.getTrivias();
  }

  getTrivias(): void {
    this.triviaItems = this.triviaService.getTriviaItems();
  }

}
