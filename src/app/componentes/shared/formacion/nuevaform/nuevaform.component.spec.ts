import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaformComponent } from './nuevaform.component';

describe('NuevaformComponent', () => {
  let component: NuevaformComponent;
  let fixture: ComponentFixture<NuevaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
