import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosproComponent } from './nuevospro.component';

describe('NuevosproComponent', () => {
  let component: NuevosproComponent;
  let fixture: ComponentFixture<NuevosproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevosproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevosproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
