import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDepartamentsComponent } from './actualizar-departaments.component';

describe('ActualizarDepartamentsComponent', () => {
  let component: ActualizarDepartamentsComponent;
  let fixture: ComponentFixture<ActualizarDepartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDepartamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
