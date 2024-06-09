import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRepartidoresComponent } from './listar-repartidores.component';

describe('ListarRepartidoresComponent', () => {
  let component: ListarRepartidoresComponent;
  let fixture: ComponentFixture<ListarRepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarRepartidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
