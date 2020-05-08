import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSongFormComponent } from './create-song-form.component';

describe('CreateSongFormComponent', () => {
  let component: CreateSongFormComponent;
  let fixture: ComponentFixture<CreateSongFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSongFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
