import { Component, OnInit } from '@angular/core';

import { Quiz } from './../model/quiz';
import { QuizService } from './../quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-quiz',
  templateUrl: './result-quiz.component.html',
  styleUrls: ['./result-quiz.component.css']
})
export class ResultQuizComponent implements OnInit {

  score: number;

  quiz: Quiz;

  pass: boolean;
  
  constructor(private quizService: QuizService, private router: Router) { 
    this.score = this.quizService.getScore();
    this.quiz = this.quizService.getQuiz();
  }

  ngOnInit() {
    this.pass =  (this.score >= (this.quiz.questions.length * (0.5)) );
  }

  restartQuiz() {
    this.router.navigate(['/']);
  }

}
