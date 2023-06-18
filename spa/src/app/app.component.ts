import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  title = 'spa';
}
