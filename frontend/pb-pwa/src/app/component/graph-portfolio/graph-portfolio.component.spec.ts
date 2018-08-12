import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPortfolioComponent } from './graph-portfolio.component';

describe('GraphPortfolioComponent', () => {
  let component: GraphPortfolioComponent;
  let fixture: ComponentFixture<GraphPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
