import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

import { MainPageComponent } from './mainPage.component';

//Mocks the Firebase auth by automatically logging in.
export const AngularFireAuthMock = jasmine.createSpy('onLoginGoogle')
  .and.returnValue(Promise.resolve({ uid: 'fakeuser' }));

describe('MainPageComponent', () => {
    // let component: MainPageComponent;
    // let fixture: ComponentFixture<MainPageComponent>;

    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //         imports:[RouterTestingModule],providers: [
    //             { provide: AngularFireAuth, useValue: AngularFireAuthMock }
    //           ],
    //         declarations: [MainPageComponent]
    //     })
    //         .compileComponents();
    // }));

    // beforeEach(() => {
    //     fixture = TestBed.createComponent(MainPageComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    // });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
