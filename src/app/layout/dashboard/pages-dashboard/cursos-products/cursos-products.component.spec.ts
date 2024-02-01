import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosProductsComponent } from './cursos-products.component';

describe('CursosProductsComponent', () => {
  let component: CursosProductsComponent;
  let fixture: ComponentFixture<CursosProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
