import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActualizarformComponent } from '../shared/formacion/actualizarform/actualizarform.component';
import { NuevaformComponent } from '../shared/formacion/nuevaform/nuevaform.component';
import { faSquarePlus,faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  faSquarePlus =faSquarePlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  formacionAcademica: any;

  constructor(private portfolioService:PortfolioService, public dialog: MatDialog) { }

   //pedidos al servicio
   public cargarElementos(){
    this.portfolioService.get(`${this.portfolioService.backUrl}/formacionacademica/mostrar`)
    .subscribe(data => {this.formacionAcademica = data
  });
  }
  
  public borrarElemento(id:any){
    this.portfolioService.delete(`${this.portfolioService.backUrl}/formacionacademica/borrar/${id}`)
    .subscribe(()=>{});
  } 

  ngOnInit(): void {
    this.cargarElementos();
  }

  enActualizacion(id:string){    
    let form = this.formacionAcademica.find(p =>{ return p.id === id});
    const dialogRef = this.dialog.open(ActualizarformComponent, {
      data:{id: form.id,descripcion: form.descripcion,institucion: form.institucion, ubicacion: form.ubicacion},
      width:'400px',
      height:'500px'
     });
    dialogRef.afterClosed().subscribe();
    }
    nuevoDialog(): void {
      const dialogRef = this.dialog.open(NuevaformComponent, {
        width:'400px',
        height:'500px'
       });
      dialogRef.afterClosed().subscribe();
      }

//final de la clase
}
