import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDayNightComponent } from './switch-day-night.component';

describe('SwitchDayNightComponent', () => {
  let component: SwitchDayNightComponent;
  let fixture: ComponentFixture<SwitchDayNightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchDayNightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDayNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
