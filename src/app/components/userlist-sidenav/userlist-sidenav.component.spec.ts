import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistSidenavComponent } from './userlist-sidenav.component';

describe('UserlistSidenavComponent', () => {
  let component: UserlistSidenavComponent;
  let fixture: ComponentFixture<UserlistSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
