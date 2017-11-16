import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrosComponent } from './bros.component';

describe('BrosComponent', () => {
  let component: BrosComponent;
  let fixture: ComponentFixture<BrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
