import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContractDetailsComponent } from './table-contract-details.component';

describe('TableContractDetailsComponent', () => {
  let component: TableContractDetailsComponent;
  let fixture: ComponentFixture<TableContractDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableContractDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
