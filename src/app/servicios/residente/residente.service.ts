import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ModelResidenteI } from '../../modelos/modelo.residente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResidenteService {

  url: string = 'https://condominio-api.up.railway.app/';
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllResidente() {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const token = this.cookieService.get('token');
    httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token)
    let direccion = this.url + "Residente";
    return this.http.get(direccion, {
      headers: httpHeaders,
      observe: 'response'
    })
      .subscribe(res => {
        console.log(res.body)
        return res
      })
  }
}