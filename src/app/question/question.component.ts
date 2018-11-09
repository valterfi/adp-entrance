import { Component, OnInit, Input } from '@angular/core';

import { Question } from "../model/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  visible: boolean = false;

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
