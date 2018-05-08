import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoPieChartComponent } from './picasso-pie-chart.component';

describe('PicassoPieChartComponent', () => {
  let component: PicassoPieChartComponent;
  let fixture: ComponentFixture<PicassoPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
