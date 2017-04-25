/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CircleimagemenuComponent } from './circleimagemenu.component';

describe('CircleimagemenuComponent', () => {
  let component: CircleimagemenuComponent;
  let fixture: ComponentFixture<CircleimagemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleimagemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleimagemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
