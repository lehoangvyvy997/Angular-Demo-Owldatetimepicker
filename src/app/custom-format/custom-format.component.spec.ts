import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormatComponent } from './custom-format.component';

describe('CustomFormatComponent', () => {
  let component: CustomFormatComponent;
  let fixture: ComponentFixture<CustomFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
