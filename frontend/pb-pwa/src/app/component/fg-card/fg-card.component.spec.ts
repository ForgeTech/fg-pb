import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgCardComponent } from './fg-card.component';

describe('FgCardComponent', () => {
  let component: FgCardComponent;
  let fixture: ComponentFixture<FgCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
