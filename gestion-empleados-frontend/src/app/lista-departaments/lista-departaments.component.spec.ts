import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDepartamentsComponent } from './lista-departaments.component';

describe('ListaDepartamentsComponent', () => {
  let component: ListaDepartamentsComponent;
  let fixture: ComponentFixture<ListaDepartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDepartamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
