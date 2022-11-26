import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-actualizarhab',
  templateUrl: './actualizarhab.component.html',
  styleUrls: ['./actualizarhab.component.css']
})
export class ActualizarhabComponent implements OnInit {

  act_habilidades_form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<ActualizarhabComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.act_habilidades_form = this.fb.group({
      id:this.data.id,
      cuantoSabes: this.data.cuantoSabes,
      nombre: this.data.nombre, 
      queHabilidadEs: this.data.queHabilidadEs
    })
    this.act_habilidades_form.valueChanges.subscribe();
  }

  actualizarData(){
    this.portfolioService.put("http://localhost:9090/habilidades/actualizar",
    {
      id: this.act_habilidades_form.value.id,
      cuantoSabes:this.act_habilidades_form.value.cuantoSabes,
      nombre: this.act_habilidades_form.value.nombre,
      queHabilidadEs:this.act_habilidades_form.value.queHabilidadEs
    }
    )
    .subscribe(() =>{
    this.act_habilidades_form.reset();      
  });
  }
  clickGuardar(){       
    this.actualizarData(); 
  }

  clickNoGuardar(): void {
    this.dialogRef.close();    
  }
}
