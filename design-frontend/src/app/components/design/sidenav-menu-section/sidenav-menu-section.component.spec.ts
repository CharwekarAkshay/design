import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMenuSectionComponent } from './sidenav-menu-section.component';

describe('SidenavMenuSectionComponent', () => {
  let component: SidenavMenuSectionComponent;
  let fixture: ComponentFixture<SidenavMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavMenuSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
