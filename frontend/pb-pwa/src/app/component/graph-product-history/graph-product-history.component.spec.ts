import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphProductHistoryComponent } from './graph-product-history.component';

describe('GraphProductHistoryComponent', () => {
  let component: GraphProductHistoryComponent;
  let fixture: ComponentFixture<GraphProductHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphProductHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphProductHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
