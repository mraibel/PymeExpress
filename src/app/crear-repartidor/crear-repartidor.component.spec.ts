import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRepartidorComponent } from './crear-repartidor.component';

describe('CrearRepartidorComponent', () => {
  let component: CrearRepartidorComponent;
  let fixture: ComponentFixture<CrearRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearRepartidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
