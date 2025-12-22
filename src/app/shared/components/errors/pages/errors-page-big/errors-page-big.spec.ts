import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsPageBig } from './errors-page-big';

describe('ErrorsPageBig', () => {
  let component: ErrorsPageBig;
  let fixture: ComponentFixture<ErrorsPageBig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsPageBig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsPageBig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
