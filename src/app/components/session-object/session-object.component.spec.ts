import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionObjectComponent } from './session-object.component';

describe('SessionObjectComponent', () => {
  let component: SessionObjectComponent;
  let fixture: ComponentFixture<SessionObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
