import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeMainComponent } from './anime-main.component';

describe('AnimeMainComponent', () => {
  let component: AnimeMainComponent;
  let fixture: ComponentFixture<AnimeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeMainComponent]
    });
    fixture = TestBed.createComponent(AnimeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
