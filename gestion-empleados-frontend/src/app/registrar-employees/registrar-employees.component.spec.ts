import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmployeesComponent } from './registrar-employees.component';

describe('RegistrarEmployeesComponent', () => {
  let component: RegistrarEmployeesComponent;
  let fixture: ComponentFixture<RegistrarEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
