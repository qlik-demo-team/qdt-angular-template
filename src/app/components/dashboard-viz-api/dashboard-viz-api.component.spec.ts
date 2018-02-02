import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVizApiComponent } from './dashboard-viz-api.component';

describe('DashboardVizApiComponent', () => {
  let component: DashboardVizApiComponent;
  let fixture: ComponentFixture<DashboardVizApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVizApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVizApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
