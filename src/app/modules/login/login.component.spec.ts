import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

//Mocks the Firebase auth by automatically logging in.
export const AngularFireAuthMock = jasmine.createSpy('onLoginGoogle')
  .and.returnValue(Promise.resolve({ uid: 'fakeuser' }));

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[RouterTestingModule],providers: [
                { provide: AngularFireAuth, useValue: AngularFireAuthMock }
              ],
            declarations: [LoginComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});