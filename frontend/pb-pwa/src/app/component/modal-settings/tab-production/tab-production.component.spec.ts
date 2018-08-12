import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProductionComponent } from './tab-production.component';

describe('TabProductionComponent', () => {
  let component: TabProductionComponent;
  let fixture: ComponentFixture<TabProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
