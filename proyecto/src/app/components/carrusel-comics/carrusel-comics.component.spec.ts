import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselComicsComponent } from './carrusel-comics.component';

describe('CarruselComicsComponent', () => {
  let component: CarruselComicsComponent;
  let fixture: ComponentFixture<CarruselComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
