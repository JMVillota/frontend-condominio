import { Component, OnInit } from '@angular/core';
import { ModelAlquilerI } from '../../modelos/modelo.alquiler';
import { AlquilerService } from '../../servicios/alquiler/alquiler.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BienService } from '../../servicios/bien/bien.service';
import { ModelBien } from '../../modelos/bien/bien.module';
import { ModelResidenteI } from '../../modelos/modelo.residente';
import { ResidenteService } from '../../servicios/residente/residente.service';

import Swal from 'sweetalert2';
// import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-sub-alquiler',
  templateUrl: './sub-alquiler.component.html',
  styleUrls: ['./sub-alquiler.component.css']
})
export class SubAlquilerComponent implements OnInit {
  constructor(private aquilerServices: AlquilerService, private bienService: BienService,
    private residenteService: ResidenteService) { }

  alquileres: ModelAlquilerI[] = [];
  bienes: ModelBien[] = [];
  condominos: ModelResidenteI[] = [];


  formAlquiler = new FormGroup({
    res_id: new FormControl('', Validators.required),
    bien_id: new FormControl('', Validators.required),
    alq_fecha: new FormControl('', Validators.required),
    alq_hora_inicio: new FormControl('', Validators.required),
    alq_hora_fin: new FormControl('', Validators.required),


  });

  formAlquilerUpdate = new FormGroup({
    alq_id: new FormControl(''),
    res_id: new FormControl('', Validators.required),
    bien_id: new FormControl('', Validators.required),
    alq_fecha: new FormControl('', Validators.required),
    alq_hora_inicio: new FormControl('', Validators.required),
    alq_hora_fin: new FormControl('', Validators.required),
    alq_total: new FormControl('', Validators.required),

  });


  ngOnInit(): void {
    this.showAllAlquileres()
    this.showAllCondominos()
    this.showAllBienes()
  }



  showAllAlquileres() {
    this.aquilerServices.getAllAlquiler().subscribe(
      (alquileres: any) => {
        this.alquileres = alquileres

      },
      (error) => console.log(error)
    );
  }

  showAllCondominos() {
    this.residenteService.getAllCondomino().subscribe(
      (condominos: any) => {
        this.condominos = condominos
        console.log(condominos)

      },
      (error) => console.log(error)
    );
  }

  showAllBienes() {
    this.bienService.getAllBien().subscribe(
      (bienes: any) => {
        this.bienes = bienes
        console.log(bienes)

      },
      (error) => console.log(error)
    );
  }
  createAlquiler(form: any) {
    if (this.formAlquiler.valid) {
      this.aquilerServices.postCreateAlquilervr(form).subscribe((data: any) => {
        if (data.status == "Error") {
          this.showModalMore('center', 'info', data.resp, false, 2000);
        } else {
          Swal.fire({
            title: data.resp,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Continuar',
            denyButtonText: `No continuar`,
          }).then((result) => {

            if (result.isConfirmed) {
              this.aquilerServices.postCreateAlquiler(form).subscribe((data: any) => {
                if (data.status == "Error") {
                  this.showModalMore('center', 'info', data.resp, false, 3000);
                } else {
                  this.showAllAlquileres();
                  this.formAlquiler.reset();
                  this.showModalMore('center', 'success', data.resp, false, 2000);
                }
              })

            } else if (result.isDenied) {
              this.formAlquiler.reset();
              this.ShowModal('Información', 'Proceso finalizado', 'info');
            }
          })
        }
      })
    } else {
      this.ShowModal('', 'Algún campo se encuentra vació', 'error');

    }

  }
  selectedOptionA: string = ""
  selectedOptionB: string = ""

  ShowModal(title: any, infor: any, tipo: any) {
    Swal.fire(title, infor, tipo);
  }
  showModalMore(position: any, icon: any, title: any, showConfirmButton: any, timer: any) {
    Swal.fire({
      position: position,
      icon: icon,
      title: title,
      showConfirmButton: showConfirmButton,
      timer: timer
    });
  }

  getDataAlquiler(alq_id: any) {

    this.aquilerServices.getAlquiler(alq_id).subscribe((data: any) => {
      this.formAlquilerUpdate.setValue({
        res_id: data[0].res_id,
        bien_id: data[0].bien_id,
        alq_fecha: data[0].alq_fecha,
        alq_hora_inicio: data[0].alq_hora_inicio,
        alq_hora_fin: data[0].alq_hora_fin,
        alq_total: data[0].alq_total,
        alq_id: data[0].alq_id,
      })

    })

  }
  updateAlquiler(form: any) {
    this.aquilerServices.putUpdateAlquiler(form).subscribe((data: any) => {
      if (data.status == "Error") {
        this.showModalMore('center', 'info', data.resp, false, 2000);
      } else {
        this.showModalMore('center', 'success', data.resp, false, 2000);
        this.showAllAlquileres();
      }
    })

  }
  deleteAlquiler(alq_id: any) {
    this.aquilerServices.deleteAlquiler(alq_id).subscribe((data: any) => {
      if (data.status == "Error") {
        this.showModalMore('center', 'info', data.resp, false, 2000);
      } else {
        this.showModalMore('center', 'success', data.resp, false, 2000);
        this.showAllAlquileres();
      }
    })

  }
}
