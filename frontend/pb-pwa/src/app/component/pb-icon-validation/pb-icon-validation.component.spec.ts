import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbIconValidationComponent } from './pb-icon-validation.component';

describe('PbIconValidationComponent', () => {
  let component: PbIconValidationComponent;
  let fixture: ComponentFixture<PbIconValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbIconValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbIconValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
