import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ModelResidenteI } from '../../modelos/modelo.residente';

@Injectable({
  providedIn: 'root'
})
export class ResidenteService {

  url: string = 'http://localhost:3000/';
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllResidente() {

    let httpHeaders: HttpHeaders = new HttpHeaders();
    const token = this.cookieService.get('token');


    httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token)

    let direccion = this.url + "Residente";
    this.http.get<ModelResidenteI[]>(direccion, {
      headers: httpHeaders,
      observe: 'response'
    })
    .subscribe(res => {
    //  console.log(res.body)

       return res.body;
    })
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