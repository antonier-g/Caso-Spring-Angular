import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnterpriseComponent } from './lista-enterprise.component';

describe('ListaEnterpriseComponent', () => {
  let component: ListaEnterpriseComponent;
  let fixture: ComponentFixture<ListaEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
