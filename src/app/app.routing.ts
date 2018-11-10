import { ResultQuizComponent } from './result-quiz/result-quiz.component';
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: 'result', component: ResultQuizComponent },
    { path: 'quiz', component: QuizComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);