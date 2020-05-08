import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinSectionFormComponent } from './join-section-form.component';

describe('JoinSectionFormComponent', () => {
  let component: JoinSectionFormComponent;
  let fixture: ComponentFixture<JoinSectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinSectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
