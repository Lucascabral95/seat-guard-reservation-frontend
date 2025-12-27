import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentActionsButtons } from './component-actions-buttons';

describe('ComponentActionsButtons', () => {
  let component: ComponentActionsButtons;
  let fixture: ComponentFixture<ComponentActionsButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentActionsButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentActionsButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
