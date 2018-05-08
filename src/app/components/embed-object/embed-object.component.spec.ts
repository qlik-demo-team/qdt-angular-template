import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedObjectComponent } from './embed-object.component';

describe('EmbedObjectComponent', () => {
  let component: EmbedObjectComponent;
  let fixture: ComponentFixture<EmbedObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbedObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
