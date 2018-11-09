import { Component, OnInit, Input } from '@angular/core';


import { Quiz } from "../model/quiz";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  visible: boolean = false;

  @Input() quiz: Quiz;

  constructor() { }

  ngOnInit() {

  }

  startQuiz() {
    
  }

}
