import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon?: string;
  @Input() variant: 'default' | 'gradient' | 'glassmorphism' = 'glassmorphism';
}