import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabApiKeyComponent } from './tab-api-key.component';

describe('TabApiKeyComponent', () => {
  let component: TabApiKeyComponent;
  let fixture: ComponentFixture<TabApiKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabApiKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabApiKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
