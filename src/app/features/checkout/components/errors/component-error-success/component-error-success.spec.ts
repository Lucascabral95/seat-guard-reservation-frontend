import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentErrorSuccess } from './component-error-success';

describe('ComponentErrorSuccess', () => {
  let component: ComponentErrorSuccess;
  let fixture: ComponentFixture<ComponentErrorSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentErrorSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentErrorSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
