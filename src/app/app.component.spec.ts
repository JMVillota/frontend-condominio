import { TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SubAlquilerComponent } from './components/sub-alquiler/sub-alquiler.component';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DropdownModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        SubAlquilerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend-condominios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend-condominios');
  });

  it(`Verificar si el array de alquileres esta vacío'`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let lleno = false
    if (app.alquileres.length > 0) {
       lleno = true
    }

    expect(lleno).toBeFalsy()
  });

  it(`Debe existir un método llamado showAllCondominos() `, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let  metodoAPI = spyOn(app, "showAllCondominos")
    app.showAllCondominos()
    expect(metodoAPI).toHaveBeenCalled();
  });

  it(`Debe existir un método llamado showAllAlquileres()`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let  metodoAPI = spyOn(app, "showAllAlquileres")
    app.showAllAlquileres()
    expect(metodoAPI).toHaveBeenCalled();
  });

  it(`Debe existir un método llamado showAllBienes()`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let  metodoAPI = spyOn(app, "showAllBienes")
    app.showAllBienes()
    expect(metodoAPI).toHaveBeenCalled();
  });

  it(`Verificar si la lista de condominios tiene por lo menos un condominio'`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    const Condominio = {
      per_id: "01",
      per_nombres: "Maria Elena",
      per_apellidos: "Duran Caicedo",
      rol_descripcion: "admin",
      res_correo: "mduran@gmail.com",
      res_telefono: "2980567",
      res_clave: "234345345",
      res_usuario: "3",
      res_id:"44"
    }
    app.condominos.push(Condominio)
    let lleno = false
    if (app.condominos.length > 0) {
       lleno = true
    }
    expect(lleno).toBeTruthy()
  });

  it(`Verificar si se ha seleccionado la opción A'`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
     expect(app.selectedOptionA).toEqual("")
  });
  it(`Verificar si se ha seleccionado la opción B'`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
     expect(app.selectedOptionB).toEqual("")
  });
  it(`Debe existir un método llamado ShowModal()`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let  metodo = spyOn(app, "ShowModal")
    app.ShowModal("Verificar", "este", "método")
    expect(metodo).toHaveBeenCalled();
  });

  it(`Verificar si el formulario de alquiler esta incializado`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let value = app.formAlquiler.value
    console.log(value)
    let empty = false
    if(value != null || value != undefined){
       empty = true
    }
    expect(empty).toBeTruthy();
  });

  it(`Verificar si el formulario de alquiler es inválido no tiene datos`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let value = app.formAlquiler.valid
    expect(value).toBeFalsy();
  });

  it(`Verificar si el formulario de actualizar alquiler es inválido no tiene datos`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let value = app.formAlquilerUpdate.valid
    expect(value).toBeFalsy();
  });

  it(`Verificar si el formulario de actualizar alquiler esta incializado`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let value = app.formAlquilerUpdate.value
    console.log(value)
    let empty = false
    if (value != null || value != undefined) {
      empty = true
    }
    expect(empty).toBeTruthy();
  });


  it(`Debe existir un método llamado deleteAlquiler()`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "deleteAlquiler")
    app.deleteAlquiler("Verificar")
    expect(metodo).toHaveBeenCalled();
  });

  it(`Debe existir un método llamado updateAlquiler()`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "updateAlquiler")
    app.updateAlquiler("Verificar")
    expect(metodo).toHaveBeenCalled();
  });


  it(`Debe existir un método llamado getDataAlquiler()`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "getDataAlquiler")
    app.getDataAlquiler("Verificar")
    expect(metodo).toHaveBeenCalled();
  });

  it(`Debe existir un método llamado createAlquiler()`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "createAlquiler")
    app.createAlquiler("Verificar")
    expect(metodo).toHaveBeenCalled();
  });



  it(`Verificar si la lista de bienes tiene almenos un valor'`, () => {
    const fixture = TestBed.createComponent(SubAlquilerComponent);
    const app = fixture.componentInstance;
    const Bien = {
      bien_id: 3,
      bien_descripcion: "canchas de volley",
      bien_costo: 12.00,
    }
    app.bienes.push(Bien)
    let lleno = false
    if (app.bienes.length > 0) {
      lleno = true
    }
    expect(lleno).toBeTruthy()
  });

});
