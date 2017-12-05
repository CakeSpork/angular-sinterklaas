import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TriviaService } from '../trivia.service';

import { TriviaItem } from './TriviaItem';
import { SinterkluisApiService } from '../sinterkluis-api.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  sinterkluisApiEndpoint: String = '';

  apiGetRequest: Observable<Object>;

  @Input() triviaItem: TriviaItem;

  constructor(private sinterkluisApiService: SinterkluisApiService,
              private http: HttpClient,
              private route: ActivatedRoute,
              private triviaService: TriviaService) { }

  ngOnInit() {
    this.sinterkluisApiEndpoint = this.sinterkluisApiService.getSinterkluisEndpoint();
    this.getTriviaItem();
  }

  getTriviaItem() : void {
    const title = '' + this.route.snapshot.paramMap.get('title');
    this.triviaItem = this.triviaService.getTriviaItemByTitle(title);
  }

  isRightAnswer() : boolean {
    return this.triviaItem.answer.toUpperCase() === this.triviaItem.input.toUpperCase();
  }

  onSubmit() {
    let url = this.sinterkluisApiEndpoint + '?code='
    if(this.isRightAnswer()) {
      url += this.triviaItem.code;
    } else {
      url += '0';
    }
    this.apiGetRequest = this.http.get(url);
  }

}
