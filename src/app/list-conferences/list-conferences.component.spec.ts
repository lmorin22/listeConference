/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListConferencesComponent } from './list-conferences.component';

describe('ListConferencesComponent', () => {
  let component: ListConferencesComponent;
  let fixture: ComponentFixture<ListConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
