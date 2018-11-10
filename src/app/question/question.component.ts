import { Answer } from './../model/answer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

import { Question } from "../model/question";
import { Quiz } from "../model/quiz";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  currentIndex: number = 0;

  count: number = 0;

  @Input() quiz: Quiz;

  @Output() changedScore = new EventEmitter();

  question: Question;

  source = interval(1000);

  subscribe$: Subscription;

  answered: boolean = false;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.question = this.quiz.questions[0];
    this.initializeCount();
  }

  initializeCount() {
    this.subscribe$ = this.source.subscribe(val => { 
      this.count = val;
      if (this.count == 1) {
        this.count = 0;
        this.nextQuestion();
      }
    });
  }

  nextQuestion() {
    let questionLenght = this.quiz.questions.length;
    if (questionLenght > this.currentIndex + 1) {
      this.currentIndex = this.currentIndex + 1;
      this.question = this.quiz.questions[this.currentIndex];
      this.answered = false;
      this.subscribe$.unsubscribe();
      this.initializeCount();
    } else {
      this.currentIndex = 0;
      this.subscribe$.unsubscribe();
      this.router.navigate(['/']);
    }
  }

  answerQuestion(answer: Answer) {
    this.answered = true;
    if (answer.value) {
      this.changedScore.emit({addScore: 1}) ;
    } else {
      this.changedScore.emit({addScore: 0});
    }
  }

}
