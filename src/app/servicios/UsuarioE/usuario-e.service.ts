import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioEService {
  url: string = 'https://condominio-api.up.railway.app/';
  constructor(private http: HttpClient) { }

  getAllUsuariosExternos() {
    let direccion = this.url + "usuarioExterno";
    return this.http.get(direccion);
  }

  // Login(form: any) {
  //   let direccion = this.url + "auth";
  //   return this.http.post(direccion, form);
  // }
  // updateAutoridad(form: any) {
  //   let direccion = this.url + "autoridades";
  //   return this.http.put(direccion, form);
  // }
}