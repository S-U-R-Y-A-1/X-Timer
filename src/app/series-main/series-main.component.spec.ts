import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMainComponent } from './series-main.component';

describe('SeriesMainComponent', () => {
  let component: SeriesMainComponent;
  let fixture: ComponentFixture<SeriesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesMainComponent]
    });
    fixture = TestBed.createComponent(SeriesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
