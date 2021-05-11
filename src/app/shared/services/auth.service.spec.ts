import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from './auth.service';

// //Mocks the Firebase auth by automatically logging in.
// export const AngularFireAuthMock = jasmine.createSpy('onLoginGoogle')
//   .and.returnValue(Promise.resolve({ uid: 'fakeuser' }));


describe('AuthService', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       { provide: AngularFireAuth, useValue: AngularFireAuthMock }
  //     ]
  //   });
  // });

  // it('should be created', inject([AuthService], (service: AuthService) => {
  //   expect(service).toBeTruthy();
  // }));
});
