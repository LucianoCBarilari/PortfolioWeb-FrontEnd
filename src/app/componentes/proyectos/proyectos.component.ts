import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faSquarePlus,faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActualizarproComponent } from '../shared/proyectos/actualizarpro/actualizarpro.component';
import { NuevosproComponent } from '../shared/proyectos/nuevospro/nuevospro.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  faSquarePlus =faSquarePlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;  
  proyectos:any;

  constructor(private portfolioService:PortfolioService, public dialog: MatDialog) { }

  public cargarElementos(){
    this.portfolioService.get("http://localhost:9090/proyectos/mostrar")
    .subscribe(data => {this.proyectos = data
      
  });
  }
  
  public borrarElemento(id:any){
    this.portfolioService.delete(`http://localhost:9090/proyectos/borrar/${id}`)
    .subscribe(()=>{});
  } 

  ngOnInit(): void {
    this.cargarElementos();
  
  }
  enActualizacion(id:string){    
    let form = this.proyectos.find(p =>{ return p.id === id});
    const dialogRef = this.dialog.open(ActualizarproComponent, {
      data:{id: form.id,descripcion: form.descripcion,nombre: form.nombre},
      width:'400px',
      height:'500px'
     });
    dialogRef.afterClosed().subscribe();
    }
    nuevoDialog(): void {
      const dialogRef = this.dialog.open(NuevosproComponent, {
        width:'400px',
        height:'500px'
       });
      dialogRef.afterClosed().subscribe();
      }
}
