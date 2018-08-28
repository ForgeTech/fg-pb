import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMarketComponent } from './modal-market.component';

describe('ModalMarketComponent', () => {
  let component: ModalMarketComponent;
  let fixture: ComponentFixture<ModalMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
