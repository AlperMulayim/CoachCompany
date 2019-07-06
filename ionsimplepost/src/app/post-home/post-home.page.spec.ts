import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHomePage } from './post-home.page';

describe('PostHomePage', () => {
  let component: PostHomePage;
  let fixture: ComponentFixture<PostHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
