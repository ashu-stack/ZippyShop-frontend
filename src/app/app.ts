import { Component, signal } from '@angular/core';
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
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar,Counter,LoginComponent,SignupComponent,Category,About,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Options');
}
