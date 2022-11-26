import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevExpComponent } from './nuev-exp.component';

describe('NuevExpComponent', () => {
  let component: NuevExpComponent;
  let fixture: ComponentFixture<NuevExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
