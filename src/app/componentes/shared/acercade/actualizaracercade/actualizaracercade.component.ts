import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-actualizaracercade',
  templateUrl: './actualizaracercade.component.html',
  styleUrls: ['./actualizaracercade.component.css']
})
export class ActualizaracercadeComponent implements OnInit {

  public acercaDe: FormGroup;

  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<ActualizaracercadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) {}
    

  ngOnInit(): void {
    this.acercaDe = this.fb.group({
      id:this.data.id,      
      descripcion:this.data.descripcion,
      apellido:this.data.apellido,
      nombre:this.data.nombre
      
    })
    this.acercaDe.valueChanges.subscribe();
  }
  actualizarData(){
    this.portfolioService.put("http://localhost:9090/acercademi/actualizar",
    {
      id: this.acercaDe.value.id,      
      descripcion:this.acercaDe.value.descripcion,
      apellido:this.acercaDe.value.apellido,
      nombre:this.acercaDe.value.nombre
      
    }
    )
    .subscribe(() =>{console.log("datos enviados");
    this.acercaDe.reset();      
  });
  }
    
  clickGuardar(){       
    this.actualizarData(); 
  }

  clickNoGuardar(): void {
    this.dialogRef.close();    
  }
}
