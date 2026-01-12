import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-heading.html',
  styleUrls: ['./section-heading.css']
})
export class SectionHeadingComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() align: 'left' | 'center' | 'right' = 'center';
}