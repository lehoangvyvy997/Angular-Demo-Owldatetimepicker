import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentJsComponent } from './moment-js.component';

describe('MomentJsComponent', () => {
  let component: MomentJsComponent;
  let fixture: ComponentFixture<MomentJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
