import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { NuevExpComponent } from 'src/app/componentes/shared/experiencial-laboral/nuev-exp/nuev-exp.component';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarComponent } from '../shared/experiencial-laboral/actualizar/actualizar.component';
import { faSquarePlus,faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  
  faSquarePlus =faSquarePlus;
  faPenToSquare =faPenToSquare;
  faTrash = faTrash;

  experienciaLaboral:any;
  imagenComponente:string[];
  
  

  constructor(private portfolioService:PortfolioService, public dialog: MatDialog) { }
  
  //pedidos al servicio
  public cargarElementos(){
    this.portfolioService.get(`${this.portfolioService.backUrl}/experienciaLaboral/mostrar`)
    .subscribe(data => {this.experienciaLaboral = data    
  });
  }
  
  public borrarElemento(id:any){
    this.portfolioService.delete(`${this.portfolioService.backUrl}/experienciaLaboral/borrar/${id}`)
    .subscribe(()=>{});
  }  
  
  //inicio del modulo
  ngOnInit(): void { 
    this.cargarElementos();      
    this.imagenComponente=[];
    this.portfolioService.getimages(this.imagenComponente);  
  }  

  //dialog del formulario para cargar elementos nuevos
  openDialog(): void {
    const dialogRef = this.dialog.open(NuevExpComponent, {
      width:'400px',
      height:'500px'
     });
    dialogRef.afterClosed().subscribe();
    }
    
  //Actualizar
  onedit(id:string){    
    let exp = this.experienciaLaboral.find(p =>{ return p.id === id});
    console.log(exp);
    const dialogRef = this.dialog.open(ActualizarComponent, {
      data:{id: exp.id,emp: exp.empresa, des: exp.descripcion, ubi: exp.ubicacion},
      width:'400px',
      height:'500px'
     });
    dialogRef.afterClosed().subscribe();
    }
  
  }






