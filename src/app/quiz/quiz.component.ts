import { Component, OnInit } from '@angular/core';

import { QuizService } from './../quiz/quiz.service';
import { Quiz } from './../model/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  score: number = 0;

  quiz: Quiz;

  constructor(private quizService: QuizService) { 
    this.quiz = this.quizService.getQuiz();
  }

  ngOnInit() {

  }

  onChangedScore(event) {
    this.score = this.score + event.addScore;
    this.quizService.setScore(this.score);
  }

}
