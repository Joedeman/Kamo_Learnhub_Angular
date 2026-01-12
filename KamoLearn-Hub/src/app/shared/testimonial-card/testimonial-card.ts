import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrls: ['./testimonial-card.css']
})
export class TestimonialCardComponent {
  @Input() name: string = '';
  @Input() message: string = '';
  @Input() achievement?: string;
  @Input() institution?: string;
}