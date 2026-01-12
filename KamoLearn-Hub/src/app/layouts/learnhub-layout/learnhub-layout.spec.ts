import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnhubLayout } from './learnhub-layout';

describe('LearnhubLayout', () => {
  let component: LearnhubLayout;
  let fixture: ComponentFixture<LearnhubLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnhubLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnhubLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
