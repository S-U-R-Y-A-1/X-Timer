import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPgComponent } from './books-pg.component';

describe('BooksPgComponent', () => {
  let component: BooksPgComponent;
  let fixture: ComponentFixture<BooksPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksPgComponent]
    });
    fixture = TestBed.createComponent(BooksPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
