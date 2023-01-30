import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServices: LoginService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {

  }
  formLogin = new FormGroup({

    res_usuario: new FormControl(''),
    res_clave: new FormControl(''),

  });

  public Login(form: any) {

    this.loginServices.Login(form).subscribe((data: any) => {
      console.log(data.resp)
      this.cookieService.set('token', data.resp, 4, '/');
      this.router.navigate(['/dashboard']);

    })

  }

}
