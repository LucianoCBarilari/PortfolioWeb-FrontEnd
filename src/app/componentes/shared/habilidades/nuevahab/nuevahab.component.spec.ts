import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevahabComponent } from './nuevahab.component';

describe('NuevahabComponent', () => {
  let component: NuevahabComponent;
  let fixture: ComponentFixture<NuevahabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevahabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevahabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
