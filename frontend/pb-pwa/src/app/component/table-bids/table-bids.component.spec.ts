import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBidsComponent } from './table-bids.component';

describe('TableBidsComponent', () => {
  let component: TableBidsComponent;
  let fixture: ComponentFixture<TableBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
