import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActualizarhabComponent } from '../shared/habilidades/actualizarhab/actualizarhab.component';
import { NuevahabComponent } from '../shared/habilidades/nuevahab/nuevahab.component';
import { faSquarePlus,faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  faSquarePlus =faSquarePlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash; 
  habilidades:any;

  constructor(private portfolioService:PortfolioService, public dialog: MatDialog) { }

  public cargarElementos(){
    this.portfolioService.get("http://localhost:9090/habilidades/mostrar")
    .subscribe(data => {this.habilidades = data
      
  });
  }
  
  public borrarElemento(id:any){
    this.portfolioService.delete(`http://localhost:9090/habilidades/borrar/${id}`)
    .subscribe(()=>{});
  } 

  ngOnInit(): void {
    this.cargarElementos();
  
  }
  enActualizacion(id:string){    
    let form = this.habilidades.find(p =>{ return p.id === id});
    const dialogRef = this.dialog.open(ActualizarhabComponent, {
      data:{id: form.id,cuantoSabes: form.cuantoSabes,nombre: form.nombre, queHabilidadEs: form.queHabilidadEs},
      width:'400px',
      height:'500px'
     });
    dialogRef.afterClosed().subscribe();
    }
    nuevoDialog(): void {
      const dialogRef = this.dialog.open(NuevahabComponent, {
        width:'400px',
        height:'500px'
       });
      dialogRef.afterClosed().subscribe();
      }

}
