import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FgActionsComponent } from './fg-actions.component';
import { Logger as LogService } from 'angular2-logger/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe( 'FgContentComponent', () => {
  let component: FgActionsComponent;
  let fixture: ComponentFixture<FgActionsComponent>;
  const LogServiceStub = jasmine.createSpyObj( 'LogService', ['log', 'info', 'warning', 'error'] );

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgActionsComponent ],
      providers: [ { provide: LogService, useValue: LogServiceStub  } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent( FgActionsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it( 'should create', () => {
    expect(component).toBeTruthy();
  });
});
