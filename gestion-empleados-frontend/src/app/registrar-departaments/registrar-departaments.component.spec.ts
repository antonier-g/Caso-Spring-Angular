import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDepartamentsComponent } from './registrar-departaments.component';

describe('RegistrarDepartamentsComponent', () => {
  let component: RegistrarDepartamentsComponent;
  let fixture: ComponentFixture<RegistrarDepartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDepartamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
