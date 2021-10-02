import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMenuButtonComponent } from './sidenav-menu-button.component';

describe('SidenavMenuButtonComponent', () => {
  let component: SidenavMenuButtonComponent;
  let fixture: ComponentFixture<SidenavMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
