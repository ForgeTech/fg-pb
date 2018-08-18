import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FgComponentBaseComponent } from './fg-component-base.component';
// import { Logger as LogService } from 'angular2-logger/core';

describe( 'FgComponentBaseComponent', () => {
  let component: FgComponentBaseComponent;
  let fixture: ComponentFixture<FgComponentBaseComponent>;
  const LogServiceStub = jasmine.createSpyObj( 'LogService', [ 'log', 'info', 'warning', 'error' ] );

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgComponentBaseComponent ],
      // providers: [ { provide: LogService, useValue: LogServiceStub  } ]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent( FgComponentBaseComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it( 'should create', () => {
  //   expect( component ).toBeTruthy();
  // });

  // it( 'has getter/setter for private _id-property' , () => {
  //   const idToSet: number = 1;
  //   component.id = idToSet;
  //   expect( component.id ).toBe( idToSet );
  // });

//   it( 'has getter/setter for private _type-property', () => {
//     const typeToSet: string = 'testType';
//     component.type = typeToSet;
//     expect( component.type ).toBe( typeToSet );
//   });

//   it( 'has getter/setter for private _state-property', () => {
//     const stateToSet: string = 'testState';
//     component.state = stateToSet;
//     expect( component.state ).toBe( stateToSet );
//   });

//   it( 'has OnInit live-cycle-event implemented', () => {
//     expect( component.ngOnInit ).toBeTruthy();
//     // Check if correct LogService-Methodes where called
//     component.ngOnInit();
//     // expect( LogServiceStub.info ).toHaveBeenCalled();
//     // expect( LogServiceStub.log ).toHaveBeenCalled();
//   });

//   it( 'has AfterViewInit live-cycle-event implemented', () => {
//     expect( component.ngAfterViewInit ).toBeTruthy();
//   });

//   it( 'has OnChanges live-cycle-event implemented', () => {
//     expect( component.ngOnChanges ).toBeTruthy();
//   });

//   it( 'has OnDestroy live-cycle-event implemented', () => {
//     expect( component.ngOnInit ).toBeTruthy();
//   });

//   it( 'ngOnChanges live-cycle-event implemented', () => {
//       console.log( LogServiceStub );
//   });

// });
