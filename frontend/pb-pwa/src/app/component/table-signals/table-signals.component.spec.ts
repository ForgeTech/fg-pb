import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSignalsComponent } from './table-signals.component';

describe('TableSignalsComponent', () => {
  let component: TableSignalsComponent;
  let fixture: ComponentFixture<TableSignalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSignalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
