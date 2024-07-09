import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPymeComponent } from './crear-pyme.component';

describe('CrearPymeComponent', () => {
  let component: CrearPymeComponent;
  let fixture: ComponentFixture<CrearPymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPymeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearPymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
