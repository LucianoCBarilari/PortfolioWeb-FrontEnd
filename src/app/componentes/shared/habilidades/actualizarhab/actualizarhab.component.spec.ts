import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarhabComponent } from './actualizarhab.component';

describe('ActualizarhabComponent', () => {
  let component: ActualizarhabComponent;
  let fixture: ComponentFixture<ActualizarhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarhabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
