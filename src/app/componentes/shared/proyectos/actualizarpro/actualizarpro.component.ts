import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-actualizarpro',
  templateUrl: './actualizarpro.component.html',
  styleUrls: ['./actualizarpro.component.css']
})
export class ActualizarproComponent implements OnInit {

  act_proyectos_form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<ActualizarproComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.act_proyectos_form = this.fb.group({
      id:this.data.id,
      descripcion: this.data.descripcion,
      nombre: this.data.nombre
    })
    this.act_proyectos_form.valueChanges.subscribe();
  }

  actualizarData(){
    this.portfolioService.put(`${this.portfolioService.backUrl}/proyectos/actualizar`,
    {
      id: this.act_proyectos_form.value.id,
      descripcion:this.act_proyectos_form.value.descripcion,
      nombre: this.act_proyectos_form.value.nombre
    }
    )
    .subscribe(() =>{
    this.act_proyectos_form.reset();      
  });
  }
  clickGuardar(){       
    this.actualizarData(); 
  }

  clickNoGuardar(): void {
    this.dialogRef.close();    
  }

}
