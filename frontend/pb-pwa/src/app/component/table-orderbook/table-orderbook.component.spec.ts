import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrderbookComponent } from './table-orderbook.component';

describe('TableOrderbookComponent', () => {
  let component: TableOrderbookComponent;
  let fixture: ComponentFixture<TableOrderbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOrderbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrderbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
