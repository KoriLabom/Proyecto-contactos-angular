import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponente } from './register-componente';

describe('RegisterComponente', () => {
  let component: RegisterComponente;
  let fixture: ComponentFixture<RegisterComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
