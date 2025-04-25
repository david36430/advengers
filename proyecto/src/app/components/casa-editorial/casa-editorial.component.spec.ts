import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaEditorialComponent } from './casa-editorial.component';

describe('CasaEditorialComponent', () => {
  let component: CasaEditorialComponent;
  let fixture: ComponentFixture<CasaEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
