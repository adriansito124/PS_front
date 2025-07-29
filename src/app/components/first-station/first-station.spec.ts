import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStation } from './first-station';

describe('FirstStation', () => {
  let component: FirstStation;
  let fixture: ComponentFixture<FirstStation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstStation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
