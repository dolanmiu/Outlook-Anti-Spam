import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Mail } from '@shared-types/mail-type';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  private readonly httpClient = inject(HttpClient);

  public readonly emails$ = this.httpClient.get<Mail[]>('/emails');
}
