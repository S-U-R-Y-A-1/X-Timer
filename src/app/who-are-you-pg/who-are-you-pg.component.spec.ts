import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreYouPgComponent } from './who-are-you-pg.component';

describe('WhoAreYouPgComponent', () => {
  let component: WhoAreYouPgComponent;
  let fixture: ComponentFixture<WhoAreYouPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoAreYouPgComponent]
    });
    fixture = TestBed.createComponent(WhoAreYouPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
