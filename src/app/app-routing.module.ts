import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResidenteComponent } from './components/residente/residente.component';
import { UserGuardGuard } from './user-guard.guard';
import { MainComponent } from './components/main/main.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ContabilidadComponent } from './components/contabilidad/contabilidad.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { UsuarioexternoComponent } from './components/usuarioexterno/usuarioexterno.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { BienComponent } from './components/bien/bien.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { SubAlquilerComponent } from './components/sub-alquiler/sub-alquiler.component';
import { SubServicioComponent } from './components/sub-servicio/sub-servicio.component';
import { TipoServicioComponent } from './components/tipo-servicio/tipo-servicio.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';
import { DetallePagoComponent } from './components/detalle-pago/detalle-pago.component';
import { SubContabilidadComponent } from './components/sub-contabilidad/sub-contabilidad.component';
import { MultaComponent } from './components/multa/multa.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { SubReporteComponent } from './components/sub-reporte/sub-reporte.component';
import { CuentasPendientesComponent } from './components/cuentas-pendientes/cuentas-pendientes.component';
import { MovimientoContableComponent } from './components/movimiento-contable/movimiento-contable.component';
import { CondominoComponent } from './components/condomino/condomino.component';
import { AsignacionesCondominosComponent } from './components/asignaciones-condominos/asignaciones-condominos.component';
import { RolcondominoComponent } from './components/rolcondomino/rolcondomino.component';
import { FooterComponent } from './components/footer/footer.component';
import { MontoComponent } from './components/monto/monto.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { SubcondominoComponent } from './components/subcondomino/subcondomino.component';
import { AsigancionesComponent } from './components/asiganciones/asiganciones.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { PagoComponent } from './components/pago/pago.component';
import { IndenmizacionComponent } from './components/indenmizacion/indenmizacion.component';
import { EditalicuotaComponent } from './components/editalicuota/editalicuota.component';
import { AlicuotaComponent } from './components/alicuota/alicuota.component';
import { AsignacionPagosComponent } from './components/asignacion-pagos/asignacion-pagos.component';
import { SubSeguridadComponent } from './components/sub-seguridad/sub-seguridad.component';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "monto", component: MontoComponent },
  { path: "indenmizacion", component: IndenmizacionComponent },
  { path: "vehiculo", component: VehiculoComponent },
  { path: "pago", component: PagoComponent },
  { path: "multa", component: MultaComponent },
  { path: "departamento", component: DepartamentoComponent },
  { path: "detallepago", component: DetallePagoComponent },
  { path: "editalicuota", component: EditalicuotaComponent },
  { path: "alicuota", component: AlicuotaComponent },
  { path: "footer", component: FooterComponent },
  { path: "residente", component: ResidenteComponent, canActivate: [UserGuardGuard] },
  { path: "main", component: MainComponent, canActivate: [UserGuardGuard] },
  {
    path: "administracion", component: AdministracionComponent, children: [
      {
        path: "Habitantes", component: CondominoComponent, children: [
          { path: "Habitante", component: ResidenteComponent },
          { path: "departamento", component: DepartamentoComponent },

        ]
      }, {
        path: "asignacionCondominos", component: AsignacionesCondominosComponent, children: [
          { path: "rolCondomino", component: RolcondominoComponent },
          { path: "Condomino", component: SubcondominoComponent },
          { path: "Asignar", component: AsigancionesComponent }

        ]
      }
      , {
        path: "pagos", component: AsignacionPagosComponent, children: [
          { path: "editAlicuota", component: EditalicuotaComponent },
          { path: "monto", component: MontoComponent }

        ]
      }
    ], canActivate: [UserGuardGuard]
  },
  {
    path: "contabilidad", component: ContabilidadComponent, children: [
      {
        path: "subContabilidad", component: SubContabilidadComponent, children: [
          { path: "detPago", component: DetallePagoComponent },
          { path: "multa", component: MultaComponent }
        ]
      },
      {
        path: "reporte", component: ReporteComponent, children: [
          { path: "subReporte", component: SubReporteComponent }
        ]
      }

    ], canActivate: [UserGuardGuard]
  },
  {
    path: "reservaciones", component: ReservacionesComponent, children: [
      {
        path: "servicios", component: ServiciosComponent, children: [
          { path: "subServicio", component: SubServicioComponent },
          { path: "tipoServico", component: TipoServicioComponent },
          { path: "detalleServicio", component: DetalleServicioComponent }
        ]
      },
      {
        path: "alquiler", component: AlquilerComponent, children: [{
          path: "bien", component: BienComponent
        }, {
          path: "subAlquiler", component: SubAlquilerComponent
        }]
      }
    ], canActivate: [UserGuardGuard]
  },
  {
    path: "seguridad", component: SeguridadComponent, children: [
      {
        path: "sub", component: SubSeguridadComponent, children:
          [{
            path: "UsuarioE", component: UsuarioexternoComponent
          },
          {
            path: "vehiculo", component: VehiculoComponent
          }]
      }

    ], canActivate: [UserGuardGuard]
  },
  {
    path: "usuarios", component: UsuariosComponent, children: [
      { path: "cuentasPendientes", component: CuentasPendientesComponent },
      { path: "reservaciones", component: MovimientoContableComponent }
    ], canActivate: [UserGuardGuard]
  },
  { path: "bien", component: BienComponent },
  { path: "usuarioE", component: UsuarioexternoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
