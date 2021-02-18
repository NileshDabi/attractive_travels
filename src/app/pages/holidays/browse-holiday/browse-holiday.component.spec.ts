import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseHolidayComponent } from './browse-holiday.component';

describe('BrowseHolidayComponent', () => {
  let component: BrowseHolidayComponent;
  let fixture: ComponentFixture<BrowseHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
