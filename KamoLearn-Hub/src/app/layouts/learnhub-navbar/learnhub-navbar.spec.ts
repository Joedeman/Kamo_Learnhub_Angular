import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnhubNavbar } from './learnhub-navbar';

describe('LearnhubNavbar', () => {
  let component: LearnhubNavbar;
  let fixture: ComponentFixture<LearnhubNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnhubNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnhubNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
