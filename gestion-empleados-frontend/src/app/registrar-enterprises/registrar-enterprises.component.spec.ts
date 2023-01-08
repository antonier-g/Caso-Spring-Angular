import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEnterprisesComponent } from './registrar-enterprises.component';

describe('RegistrarEnterprisesComponent', () => {
  let component: RegistrarEnterprisesComponent;
  let fixture: ComponentFixture<RegistrarEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEnterprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
