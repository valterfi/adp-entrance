import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Quizzes } from './model/quizzes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'adp-entrance';

  quizzes: Quizzes;

  constructor(private http: Http) { 
    http.get('./src/quiz.json').subscribe(res => {
      this.quizzes = Object.assign(new Quizzes(), res.json());
      console.log(this.quizzes.quizzes[0].questions[0]);
    });
  }

  ngOnInit() {
    
  }
}
