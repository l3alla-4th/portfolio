import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  welcomeMessages = [
    'Welcome',
    'Bienvenido', 
    'Bienvenue',
    'Willkommen',
    'Benvenuto',
    'ようこそ',
    '欢迎',
    '환영합니다'
  ];
  currentIndex = 0;
  currentWelcome = this.welcomeMessages[0];

  cycleWelcome() {
    this.currentIndex = (this.currentIndex + 1) % this.welcomeMessages.length;
    this.currentWelcome = this.welcomeMessages[this.currentIndex];
  }
}