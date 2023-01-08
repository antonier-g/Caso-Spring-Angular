import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEnterprisesComponent } from './actualizar-enterprises.component';

describe('ActualizarEnterprisesComponent', () => {
  let component: ActualizarEnterprisesComponent;
  let fixture: ComponentFixture<ActualizarEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEnterprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
