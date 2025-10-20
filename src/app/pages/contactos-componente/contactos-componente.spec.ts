import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosComponente } from './contactos-componente';

describe('ContactosComponente', () => {
  let component: ContactosComponente;
  let fixture: ComponentFixture<ContactosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactosComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactosComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
