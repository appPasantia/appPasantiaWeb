import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { InternshipService } from 'src/app/shared/services/internship.service';

import { Tab1Component } from './tab1.component';

describe('Tab1Component', () => {
    let component: Tab1Component;
    let fixture: ComponentFixture<Tab1Component>;
    let de: DebugElement;

    let service: InternshipService;
    let spy: jasmine.Spy;


    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                InternshipService,

            ],
            declarations: [Tab1Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Tab1Component);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        service = de.injector.get(InternshipService);
        spy = spyOn(service, 'getID').and.returnValue('msg');  //here we put the name of the method, msg is what we espect to got

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});