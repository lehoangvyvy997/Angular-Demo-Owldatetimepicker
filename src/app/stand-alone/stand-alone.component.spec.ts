import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAloneComponent } from './stand-alone.component';

describe('StandAloneComponent', () => {
  let component: StandAloneComponent;
  let fixture: ComponentFixture<StandAloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandAloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
