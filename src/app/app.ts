import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Experiences } from './experiences/experiences';
import { Contact } from './contact/contact';
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [Header, Home, Experiences, Contact, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-salah');
}
