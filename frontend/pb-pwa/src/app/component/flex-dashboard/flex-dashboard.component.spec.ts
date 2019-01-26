import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDashboardComponent } from './flex-dashboard.component';

describe('FlexDashboardComponent', () => {
  let component: FlexDashboardComponent;
  let fixture: ComponentFixture<FlexDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
