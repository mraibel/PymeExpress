import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRepartosComponent } from './listar-repartos.component';

describe('ListarRepartosComponent', () => {
  let component: ListarRepartosComponent;
  let fixture: ComponentFixture<ListarRepartosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarRepartosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarRepartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
