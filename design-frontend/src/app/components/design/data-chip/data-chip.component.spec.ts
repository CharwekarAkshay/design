import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChipComponent } from './data-chip.component';

describe('DataChipComponent', () => {
  let component: DataChipComponent;
  let fixture: ComponentFixture<DataChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
