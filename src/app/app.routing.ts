import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: 'quiz', component: QuizComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);