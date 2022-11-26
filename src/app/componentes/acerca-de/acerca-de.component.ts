import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActualizaracercadeComponent } from '../shared/acercade/actualizaracercade/actualizaracercade.component';
import { faSquarePlus,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  faSquarePlus = faSquarePlus;
  faPenToSquare = faPenToSquare

  acercaDeData:any;
  

  constructor(private portfolioService:PortfolioService, public dialog: MatDialog) { }
  //pedidos al servicio
  public cargarElementos(){
    this.portfolioService.get("http://localhost:9090/acercademi/mostrar")
    .subscribe(res => {this.acercaDeData = res
           
  });
  }
 

   //inicio del modulo
  ngOnInit(): void {
    this.cargarElementos();  
    
  }



  onedit(id:string){    
    let acerca = this.acercaDeData.find(p =>{ return p.id === id});    
    const dialogRef = this.dialog.open(ActualizaracercadeComponent, {
      data:{id: acerca.id, descripcion: acerca.descripcion, apellido: acerca.apellido, nombre: acerca.nombre},
      width:'400px',
      height:'500px'
     });
    dialogRef.afterClosed().subscribe();
    }

}
