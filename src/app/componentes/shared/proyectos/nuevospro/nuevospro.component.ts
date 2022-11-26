import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-nuevospro',
  templateUrl: './nuevospro.component.html',
  styleUrls: ['./nuevospro.component.css']
})
export class NuevosproComponent implements OnInit {

  proyectos_Form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<NuevosproComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      descripcion: string,
      nombre: string
    }
  ) { }

  ngOnInit(): void {
    this.proyectos_Form = this.fb.group({
      descripcion: '',
      nombre: ''
    })
    this.proyectos_Form.valueChanges.subscribe()
  }
  public  GuardarData(){
    this.portfolioService.post("http://localhost:9090/proyectos/crear",
    {
      descripcion: this.proyectos_Form.value.descripcion,
      nombre:this.proyectos_Form.value.nombre
    }
    )
    .subscribe(() =>{
    this.proyectos_Form.reset();      
  });
}
    
clickGuardar(){
  this.GuardarData();    
}

clickNoGuardar(): void {
  this.dialogRef.close();    
}

}
