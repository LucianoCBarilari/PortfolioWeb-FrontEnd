import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarformComponent } from './actualizarform.component';

describe('ActualizarformComponent', () => {
  let component: ActualizarformComponent;
  let fixture: ComponentFixture<ActualizarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
