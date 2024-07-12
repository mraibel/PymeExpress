import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartiendoComponent } from './repartiendo.component';

describe('RepartiendoComponent', () => {
  let component: RepartiendoComponent;
  let fixture: ComponentFixture<RepartiendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepartiendoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepartiendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
