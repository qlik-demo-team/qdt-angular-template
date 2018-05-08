import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoScatterplotWithImagesComponent } from './picasso-scatterplot-with-images.component';

describe('PicassoScatterplotWithImagesComponent', () => {
  let component: PicassoScatterplotWithImagesComponent;
  let fixture: ComponentFixture<PicassoScatterplotWithImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoScatterplotWithImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoScatterplotWithImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
