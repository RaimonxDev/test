import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltereventsComponent } from './filterevents.component';

describe('FiltereventsComponent', () => {
  let component: FiltereventsComponent;
  let fixture: ComponentFixture<FiltereventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltereventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltereventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
