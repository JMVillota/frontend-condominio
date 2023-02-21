import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ResidenteComponent } from './components/residente/residente.component';
import { UsuarioexternoComponent } from './components/usuarioexterno/usuarioexterno.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContabilidadComponent } from './components/contabilidad/contabilidad.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { BienComponent } from './components/bien/bien.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { SubAlquilerComponent } from './components/sub-alquiler/sub-alquiler.component';
import { SubServicioComponent } from './components/sub-servicio/sub-servicio.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';
import { TipoServicioComponent } from './components/tipo-servicio/tipo-servicio.component';
import { SubContabilidadComponent } from './components/sub-contabilidad/sub-contabilidad.component';
import { SubReporteComponent } from './components/sub-reporte/sub-reporte.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { MultaComponent } from './components/multa/multa.component';
import { DetallePagoComponent } from './components/detalle-pago/detalle-pago.component';
import { CuentasPendientesComponent } from './components/cuentas-pendientes/cuentas-pendientes.component';
import { MovimientoContableComponent } from './components/movimiento-contable/movimiento-contable.component';
import { CondominoComponent } from './components/condomino/condomino.component';
import { RolcondominoComponent } from './components/rolcondomino/rolcondomino.component';
import { AsignacionesCondominosComponent } from './components/asignaciones-condominos/asignaciones-condominos.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'primeng/dropdown';
import { DetallecuotaComponent } from './components/detallecuota/detallecuota.component';
import { MontoComponent } from './components/monto/monto.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { SubcondominoComponent } from './components/subcondomino/subcondomino.component';
import { AsigancionesComponent } from './components/asiganciones/asiganciones.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { PagoComponent } from './components/pago/pago.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IndenmizacionComponent } from './components/indenmizacion/indenmizacion.component';
import { AlicuotaComponent } from './components/alicuota/alicuota.component';
import { EditalicuotaComponent } from './components/editalicuota/editalicuota.component';
//prime ng
import {TableModule} from 'primeng/table';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TreeSelectModule} from 'primeng/treeselect';
import { AsignacionPagosComponent } from './components/asignacion-pagos/asignacion-pagos.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SubSeguridadComponent } from './components/sub-seguridad/sub-seguridad.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResidenteComponent,
    UsuarioexternoComponent,
    ContabilidadComponent,
    ReservacionesComponent,
    UsuariosComponent,
    AdministracionComponent,
    SeguridadComponent,
    HeaderComponent,
    FooterComponent,
    BienComponent,
    ServiciosComponent,
    AlquilerComponent,
    SubAlquilerComponent,
    SubServicioComponent,
    DetalleServicioComponent,
    TipoServicioComponent,
    SubContabilidadComponent,
    SubReporteComponent,
    ReporteComponent,
    MultaComponent,
    DetallePagoComponent,
    CuentasPendientesComponent,
    MovimientoContableComponent,
    CondominoComponent,
    RolcondominoComponent,
    AsignacionesCondominosComponent,
    DetallecuotaComponent,
    MontoComponent,
    DepartamentoComponent,
    SubcondominoComponent,
    AsigancionesComponent,
    VehiculoComponent,
    PagoComponent,
    IndenmizacionComponent,
    AlicuotaComponent,
    EditalicuotaComponent,
    AsignacionPagosComponent,
    MainComponent,
    SubSeguridadComponent

  ],
  imports: [
    BrowserModule,
    [MatDatepickerModule],

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    DropdownModule,
    TableModule,
    PaginatorModule,
    InputNumberModule,
    InputTextareaModule,
    CheckboxModule,
    DataViewModule,
    ButtonModule,
    TreeSelectModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
