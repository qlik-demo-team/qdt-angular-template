import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoScatterplotComponent } from './picasso-scatterplot.component';

describe('PicassoScatterplotComponent', () => {
  let component: PicassoScatterplotComponent;
  let fixture: ComponentFixture<PicassoScatterplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoScatterplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
