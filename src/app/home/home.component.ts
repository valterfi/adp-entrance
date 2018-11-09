import { Quizzes } from './../model/quizzes';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizzes: Quizzes = new Quizzes();

  constructor(private http: Http) {
    this.quizzes.quizzes = [];
    http.get('./src/quiz.json').subscribe(res => {
      this.quizzes = Object.assign(new Quizzes(), res.json());
      console.log(this.quizzes);
    });
  }

  ngOnInit() {
    
  }

}
