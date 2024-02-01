import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosUsersComponent } from './alumnos-users.component';

describe('AlumnosUsersComponent', () => {
  let component: AlumnosUsersComponent;
  let fixture: ComponentFixture<AlumnosUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
