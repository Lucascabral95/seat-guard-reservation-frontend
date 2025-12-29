import 'zone.js';
import 'zone.js/testing';

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {Header} from './header';

@Component({
  selector: 'list-categories',
  standalone: true,
  template: '',
})
class ListCategoriesStub {}

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    })
      .overrideComponent(Header, {
        set: {
          imports: [ListCategoriesStub],
        },
      })
      .compileComponents();
  });

  it('should create the header component', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render header and list-categories', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('header')).toBeTruthy();
    expect(el.querySelector('list-categories')).toBeTruthy();
  });
});
