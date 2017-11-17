import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroDetailComponent } from './bro-detail.component';

describe('BroDetailComponent', () => {
  let component: BroDetailComponent;
  let fixture: ComponentFixture<BroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
