import 'zone.js';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import FiltersMyTickets from './filters';
import { signal } from '@angular/core';
import { BuyStatus } from '../../interfaces';

describe('FiltersMyTickets', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersMyTickets],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FiltersMyTickets);
    fixture.componentInstance.selectedStatus = signal('all');
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should emit filterChange when clicking button', () => {
    const fixture = TestBed.createComponent(FiltersMyTickets);
    const component = fixture.componentInstance;

    component.selectedStatus = signal('all');
    spyOn(component.filterChange, 'emit');

    fixture.detectChanges();

    component.setFilter(BuyStatus.COMPLETED);

    expect(component.filterChange.emit).toHaveBeenCalledWith(
      BuyStatus.COMPLETED
    );
  });
});
