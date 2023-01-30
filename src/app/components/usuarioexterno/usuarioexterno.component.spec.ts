import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioexternoComponent } from './usuarioexterno.component';

describe('UsuarioexternoComponent', () => {
  let component: UsuarioexternoComponent;
  let fixture: ComponentFixture<UsuarioexternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioexternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioexternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
