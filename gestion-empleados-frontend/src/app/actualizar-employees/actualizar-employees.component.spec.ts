import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmployeesComponent } from './actualizar-employees.component';

describe('ActualizarEmployeesComponent', () => {
  let component: ActualizarEmployeesComponent;
  let fixture: ComponentFixture<ActualizarEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
