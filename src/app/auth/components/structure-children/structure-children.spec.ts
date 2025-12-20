import { ComponentFixture, TestBed } from '@angular/core/testing';

import StructureChildren from './structure-children';

describe('StructureChildren', () => {
  let component: StructureChildren;
  let fixture: ComponentFixture<StructureChildren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureChildren]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureChildren);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
