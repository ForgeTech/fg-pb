import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBestBidComponent } from './table-best-bid.component';

describe('TableBestBidComponent', () => {
  let component: TableBestBidComponent;
  let fixture: ComponentFixture<TableBestBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBestBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBestBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
