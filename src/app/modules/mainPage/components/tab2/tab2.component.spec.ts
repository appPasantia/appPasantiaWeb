/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tab2Component } from './tab2.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Tab2Component', () => {
  let component: Tab2Component;
  let fixture: ComponentFixture<Tab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ Tab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
