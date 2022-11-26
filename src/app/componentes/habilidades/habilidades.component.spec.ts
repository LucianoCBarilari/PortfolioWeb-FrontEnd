import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HablidadesComponent } from './habilidades.component';

describe('HablidadesComponent', () => {
  let component: HablidadesComponent;
  let fixture: ComponentFixture<HablidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HablidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HablidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
