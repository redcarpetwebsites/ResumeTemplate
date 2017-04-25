/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoingComponent } from './doing.component';

describe('DoingComponent', () => {
  let component: DoingComponent;
  let fixture: ComponentFixture<DoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
