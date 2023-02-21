import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {

  url= environment.base_url;
  constructor(private http: HttpClient) { }
  
  public getAllVehiculo(){
    const url=this.url+`vehiculos`
    return this.http.get(url)
  }

  public getAllResidente(){
    const url=this.url+`Residente`
    return this.http.get(url)
  }

  public postCreateVehiculo(body:any){
    const url=this.url+`vehiculo`
    return this.http.post(url,body)
  }

  public putUpdateVehiculo(body:any){
    console.log(body)
    const url=this.url+`vehiculo/`+body.veh_placa
    return this.http.put(url,body)
  }
  
  public deleteVehiculo(veh_placa:any){
    const url= this.url+`vehiculo/`+veh_placa
    return this.http.delete(url)
  }

}
