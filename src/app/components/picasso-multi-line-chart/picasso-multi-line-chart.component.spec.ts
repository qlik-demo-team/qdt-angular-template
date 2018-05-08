import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoMultiLineChartComponent } from './picasso-multi-line-chart.component';

describe('PicassoMultiLineChartComponent', () => {
  let component: PicassoMultiLineChartComponent;
  let fixture: ComponentFixture<PicassoMultiLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoMultiLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoMultiLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
