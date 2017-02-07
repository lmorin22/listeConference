/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailConferenceComponent } from './detail-conference.component';

describe('DetailConferenceComponent', () => {
  let component: DetailConferenceComponent;
  let fixture: ComponentFixture<DetailConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
