import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoHorizontalBarchartComponent } from './picasso-horizontal-barchart.component';

describe('PicassoHorizontalBarchartComponent', () => {
  let component: PicassoHorizontalBarchartComponent;
  let fixture: ComponentFixture<PicassoHorizontalBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoHorizontalBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoHorizontalBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
