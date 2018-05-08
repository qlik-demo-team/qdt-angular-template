import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoVerticalBarchartComponent } from './picasso-vertical-barchart.component';

describe('PicassoVerticalBarchartComponent', () => {
  let component: PicassoVerticalBarchartComponent;
  let fixture: ComponentFixture<PicassoVerticalBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoVerticalBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoVerticalBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
