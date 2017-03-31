/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockResume2Component } from './block-resume2.component';

describe('BlockResume2Component', () => {
  let component: BlockResume2Component;
  let fixture: ComponentFixture<BlockResume2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockResume2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockResume2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
