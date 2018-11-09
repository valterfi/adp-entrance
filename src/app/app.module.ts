import { QuizService } from './quiz/quiz.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizComponent,
    HomeComponent,
    QuizDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
