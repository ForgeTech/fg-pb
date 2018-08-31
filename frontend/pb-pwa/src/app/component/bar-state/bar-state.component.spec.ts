import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStateComponent } from './bar-state.component';

describe('BarStateComponent', () => {
  let component: BarStateComponent;
  let fixture: ComponentFixture<BarStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
