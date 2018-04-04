import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicassoComponent } from './picasso.component';

describe('PicassoComponent', () => {
  let component: PicassoComponent;
  let fixture: ComponentFixture<PicassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
