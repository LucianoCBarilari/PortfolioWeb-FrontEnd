import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-nuevahab',
  templateUrl: './nuevahab.component.html',
  styleUrls: ['./nuevahab.component.css']
})
export class NuevahabComponent implements OnInit {

  habilidad_Form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<NuevahabComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      cuantoSabes: string,
      nombre: string, 
      queHabilidadEs: string
    }
  ) { }

  ngOnInit(): void {
    this.habilidad_Form = this.fb.group({
      cuantoSabes: '',
      nombre: '', 
      queHabilidadEs: ''
    })
    this.habilidad_Form.valueChanges.subscribe()
  }
  public  GuardarData(){
    this.portfolioService.post(`${this.portfolioService.backUrl}/habilidades/crear`,
    {
      cuantoSabes: this.habilidad_Form.value.cuantoSabes,
      nombre:this.habilidad_Form.value.nombre,
      queHabilidadEs:this.habilidad_Form.value.queHabilidadEs
    }
    )
    .subscribe(() =>{
    this.habilidad_Form.reset();      
  });
}
    
clickGuardar(){
  this.GuardarData();    
}

clickNoGuardar(): void {
  this.dialogRef.close();    
}

}
