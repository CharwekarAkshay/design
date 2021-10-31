import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailRatingComponent } from './movie-detail-rating.component';

describe('MovieDetailRatingComponent', () => {
  let component: MovieDetailRatingComponent;
  let fixture: ComponentFixture<MovieDetailRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
