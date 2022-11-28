import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  send(){
    this.authService.iniciarSesion()
    .subscribe(() =>{console.log("datos enviados")})
  }
}
