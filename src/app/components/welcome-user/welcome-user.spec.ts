import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeUser } from './welcome-user';

describe('WelcomeUser', () => {
  let component: WelcomeUser;
  let fixture: ComponentFixture<WelcomeUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeUser],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
