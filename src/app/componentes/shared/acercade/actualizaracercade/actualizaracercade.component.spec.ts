import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaracercadeComponent } from './actualizaracercade.component';

describe('ActualizaracercadeComponent', () => {
  let component: ActualizaracercadeComponent;
  let fixture: ComponentFixture<ActualizaracercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaracercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaracercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
