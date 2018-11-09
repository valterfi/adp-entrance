import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz } from "../model/quiz";
import { QuizService } from './../quiz/quiz.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  @Input() quiz: Quiz;

  constructor(private quizService: QuizService, private router: Router) { 

  }

  ngOnInit() {

  }

  startQuiz() {
    this.quizService.setQuiz(this.quiz);
    this.router.navigate(['/quiz']);
  }

}
