import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConfirmation } from './header-confirmation';

describe('HeaderConfirmation', () => {
  let component: HeaderConfirmation;
  let fixture: ComponentFixture<HeaderConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderConfirmation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderConfirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
