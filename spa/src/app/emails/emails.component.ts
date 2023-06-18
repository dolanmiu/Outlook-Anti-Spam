import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsService } from './emails.service';

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-8" *ngIf="emails$ | async as emails">
      <h2 class="text-2xl font-bold underline">Emails</h2>
      <div class="border-black border shadow-lg" *ngFor="let email of emails">
        <h3 class="text-xl font-bold underline">{{ email.subject }}</h3>
        <div>Type of email: {{ email.body.contentType }}</div>
        <div [innerHTML]="email.body.content"></div>
      </div>
    </div>
  `,
  styles: [],
})
export class EmailsComponent {
  public readonly emails$ = inject(EmailsService).emails$;
}
