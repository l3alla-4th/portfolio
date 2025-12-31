import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  socialLinks = [
    { icon: 'pi pi-github', url: 'https://github.com/l3alla-4th', label: 'GitHub' },
    { icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/salah-allalou-b98547212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com/salah_allalou', label: 'X' },
    { icon: 'pi pi-instagram', url: 'https://instagram.com/salah_allalou', label: 'Instagram' }
  ];

}
