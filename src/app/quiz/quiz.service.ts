import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Quizzes } from './../model/quizzes';
import { Quiz } from './../model/quiz';

@Injectable()
export class QuizService {

  score: number;

  quiz: Quiz;

  quizzes: Quizzes = new Quizzes();

  constructor(private http: Http) { 
  }

  getQuizzes() {
    return this.http.get('./src/quiz.json');    
  }

  setQuiz(quiz) {
    this.quiz = quiz;
  }

  getQuiz(): Quiz {
    return this.quiz;
  }

  setScore(score) {
    this.score = score;
  }

  getScore(): number {
    return this.score;
  }
}
