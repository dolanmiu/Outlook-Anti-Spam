import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { EmailsComponent } from './emails/emails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <app-emails></app-emails>
  `,
  styles: [],
  imports: [CommonModule, RouterOutlet, EmailsComponent],
})
export class AppComponent {
  title = 'spa';
}
