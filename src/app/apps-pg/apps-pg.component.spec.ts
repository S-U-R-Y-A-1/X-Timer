import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsPgComponent } from './apps-pg.component';

describe('AppsPgComponent', () => {
  let component: AppsPgComponent;
  let fixture: ComponentFixture<AppsPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppsPgComponent]
    });
    fixture = TestBed.createComponent(AppsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
