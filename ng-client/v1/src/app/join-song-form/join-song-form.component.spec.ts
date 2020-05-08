import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinSongFormComponent } from './join-song-form.component';

describe('JoinSongFormComponent', () => {
  let component: JoinSongFormComponent;
  let fixture: ComponentFixture<JoinSongFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinSongFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinSongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
