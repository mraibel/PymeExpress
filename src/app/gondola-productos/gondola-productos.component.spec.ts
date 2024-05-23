import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaProductosComponent } from './gondola-productos.component';

describe('GondolaProductosComponent', () => {
  let component: GondolaProductosComponent;
  let fixture: ComponentFixture<GondolaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GondolaProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GondolaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
