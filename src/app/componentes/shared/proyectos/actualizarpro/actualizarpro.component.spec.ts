import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarproComponent } from './actualizarpro.component';

describe('ActualizarproComponent', () => {
  let component: ActualizarproComponent;
  let fixture: ComponentFixture<ActualizarproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
