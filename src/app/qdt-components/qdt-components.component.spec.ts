import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdtComponentsComponent } from './qdt-components.component';

describe('QdtComponentsComponent', () => {
  let component: QdtComponentsComponent;
  let fixture: ComponentFixture<QdtComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QdtComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QdtComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
