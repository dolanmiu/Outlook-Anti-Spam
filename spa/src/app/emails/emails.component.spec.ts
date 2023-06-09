import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsComponent } from './emails.component';

describe('EmailsComponent', () => {
  let component: EmailsComponent;
  let fixture: ComponentFixture<EmailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmailsComponent],
    });
    fixture = TestBed.createComponent(EmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
