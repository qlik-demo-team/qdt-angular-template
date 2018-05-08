import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoComboLineBarchartComponent } from './picasso-combo-line-barchart.component';

describe('PicassoComboLineBarchartComponent', () => {
  let component: PicassoComboLineBarchartComponent;
  let fixture: ComponentFixture<PicassoComboLineBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoComboLineBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoComboLineBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
