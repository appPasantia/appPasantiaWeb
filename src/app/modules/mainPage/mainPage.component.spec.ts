import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

import { MainPageComponent } from './mainPage.component';

//Mocks the Firebase auth by automatically logging in.
export const AngularFireAuthMock = jasmine.createSpy('onLoginGoogle')
  .and.returnValue(Promise.resolve({ uid: 'fakeuser' }));

describe('MainPageComponent', () => {

});
