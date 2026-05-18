import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Counter } from './components/counter/counter';
import { LoginComponent } from './components/login-component/login-component';
import { SignupComponent } from './components/signup-component/signup-component';
import { Home } from './components/home/home';
import { Category } from './components/category/category';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import {CourseCard} from './components/course-card/course-card'
import { COURSES } from '../db-data';

import {ReactiveFormsModule } from '@angular/forms'
import { Course } from '../courses';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule, Header, CourseCard,Navbar,Counter,LoginComponent,Category,About,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Options');
   
  courses = COURSES;
  
  first = COURSES[0]

  second = COURSES[1]

  third = COURSES[2]
  
}
