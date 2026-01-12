import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@TutoringWithKamo',
    icon: 'fa-brands fa-youtube'
  },
  {
    name: 'Email',
    url: 'mailto:masetloakamogelo1@gmail.com',
    icon: 'fa-solid fa-envelope'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/27676618616',
    icon: 'fa-brands fa-whatsapp'
  }
];


  quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];
}