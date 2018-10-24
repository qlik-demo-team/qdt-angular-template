import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoStackedBarchartComponent } from './picasso-stacked-barchart.component';

describe('PicassoStackedBarchartComponent', () => {
  let component: PicassoStackedBarchartComponent;
  let fixture: ComponentFixture<PicassoStackedBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoStackedBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoStackedBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
