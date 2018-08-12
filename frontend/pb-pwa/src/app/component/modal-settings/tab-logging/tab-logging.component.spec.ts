import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLoggingComponent } from './tab-logging.component';

describe('TabLoggingComponent', () => {
  let component: TabLoggingComponent;
  let fixture: ComponentFixture<TabLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
