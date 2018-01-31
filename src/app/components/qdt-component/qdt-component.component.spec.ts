import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QdtComponentComponent } from './qdt-component.component';

describe('QdtComponentComponent', () => {
  let component: QdtComponentComponent;
  let fixture: ComponentFixture<QdtComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QdtComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QdtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
