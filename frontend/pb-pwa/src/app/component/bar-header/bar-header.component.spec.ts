import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHeaderComponent } from './bar-header.component';

describe('BarHeaderComponent', () => {
  let component: BarHeaderComponent;
  let fixture: ComponentFixture<BarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
