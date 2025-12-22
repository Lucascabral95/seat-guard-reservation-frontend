import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoading } from './component-loading';

describe('ComponentLoading', () => {
  let component: ComponentLoading;
  let fixture: ComponentFixture<ComponentLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLoading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLoading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
