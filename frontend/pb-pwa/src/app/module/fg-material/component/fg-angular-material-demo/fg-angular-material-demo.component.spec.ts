import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgAngularMaterialDemoComponent } from './fg-angular-material-demo.component';

describe('FgAngularMaterialDemoComponent', () => {
  let component: FgAngularMaterialDemoComponent;
  let fixture: ComponentFixture<FgAngularMaterialDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgAngularMaterialDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgAngularMaterialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
