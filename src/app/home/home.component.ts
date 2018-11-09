import { QuizService } from './../quiz/quiz.service';
import { Quizzes } from './../model/quizzes';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizzes: Quizzes = new Quizzes();

  constructor(private quizService: QuizService) {
    quizService.getQuizzes().subscribe(res => {
      this.quizzes = Object.assign(new Quizzes(), res.json());
    }); 

  }

  ngOnInit() {
    
  }

}
