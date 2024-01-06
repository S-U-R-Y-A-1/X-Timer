import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesAndAnimePgComponent } from './series-and-anime-pg.component';

describe('SeriesAndAnimePgComponent', () => {
  let component: SeriesAndAnimePgComponent;
  let fixture: ComponentFixture<SeriesAndAnimePgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesAndAnimePgComponent]
    });
    fixture = TestBed.createComponent(SeriesAndAnimePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
