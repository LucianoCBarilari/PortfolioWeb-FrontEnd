import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-actualizarform',
  templateUrl: './actualizarform.component.html',
  styleUrls: ['./actualizarform.component.css']
})
export class ActualizarformComponent implements OnInit {
  
  actualizar_formacion_academica_form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<ActualizarformComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.actualizar_formacion_academica_form = this.fb.group({
      id:this.data.id,
      descripcion:this.data.descripcion,
      institucion: this.data.institucion,
      ubicacion:this.data.ubicacion
    })
    this.actualizar_formacion_academica_form.valueChanges.subscribe();
  }
  actualizarData(){
    this.portfolioService.put("http://localhost:9090/formacionacademica/actualizar",
    {
      id: this.actualizar_formacion_academica_form.value.id,
      descripcion:this.actualizar_formacion_academica_form.value.descripcion,
      institucion: this.actualizar_formacion_academica_form.value.institucion,
      ubicacion:this.actualizar_formacion_academica_form.value.ubicacion
    }
    )
    .subscribe(() =>{
    this.actualizar_formacion_academica_form.reset();      
  });
  }
    
  clickGuardar(){       
    this.actualizarData(); 
  }

  clickNoGuardar(): void {
    this.dialogRef.close();    
  }

}
