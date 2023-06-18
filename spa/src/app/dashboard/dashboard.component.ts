import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsComponent } from '../emails/emails.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h1 class="text-3xl font-bold">Junk Mail Filter Configurator</h1>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <app-emails></app-emails>
      </div>
      <div></div>
    </div>
  `,
  styles: [],
  imports: [CommonModule, EmailsComponent],
})
export class DashboardComponent {}
