import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAsksComponent } from './table-asks.component';

describe('TableAsksComponent', () => {
  let component: TableAsksComponent;
  let fixture: ComponentFixture<TableAsksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAsksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAsksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
