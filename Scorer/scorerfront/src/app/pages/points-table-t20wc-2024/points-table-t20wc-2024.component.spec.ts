import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsTableT20wc2024Component } from './points-table-t20wc-2024.component';

describe('PointsTableT20wc2024Component', () => {
  let component: PointsTableT20wc2024Component;
  let fixture: ComponentFixture<PointsTableT20wc2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsTableT20wc2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsTableT20wc2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
