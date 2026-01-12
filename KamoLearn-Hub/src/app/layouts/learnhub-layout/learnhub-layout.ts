import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearnhubNavbarComponent } from '../learnhub-navbar/learnhub-navbar';

@Component({
  selector: 'app-learnhub-layout',
  standalone: true,
  imports: [RouterOutlet, LearnhubNavbarComponent],
  templateUrl: './learnhub-layout.html',
})
export class LearnhubLayoutComponent {}
