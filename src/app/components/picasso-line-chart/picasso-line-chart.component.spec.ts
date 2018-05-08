import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoLineChartComponent } from './picasso-line-chart.component';

describe('PicassoLineChartComponent', () => {
  let component: PicassoLineChartComponent;
  let fixture: ComponentFixture<PicassoLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
