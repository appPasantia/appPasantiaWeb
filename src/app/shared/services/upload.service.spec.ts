import { async, fakeAsync, TestBed, inject, ComponentFixture, } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By} from '@angular/platform-browser'

import { UploadService } from './upload.service';

describe('UploadService', () => {
  let component: UploadService;
  let fixture: ComponentFixture<UploadService>;
  let de: DebugElement;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      providers: [UploadService]
    })
    .compileComponents(); 
  });

  beforeEach( ()=> {
    fixture = TestBed.createComponent(UploadService);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  } );

  it('should be created', inject([UploadService], (service: UploadService) => {
    expect(service).toBeTruthy();
  }));
});