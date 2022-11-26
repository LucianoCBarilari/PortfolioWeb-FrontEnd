import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-nuevaform',
  templateUrl: './nuevaform.component.html',
  styleUrls: ['./nuevaform.component.css']
})
export class NuevaformComponent implements OnInit {

  formacion_academica_form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<NuevaformComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      descripcion: string,
      institucion:string,
      ubicacion:string
    }
  ) { }

  ngOnInit(): void {
    this.formacion_academica_form = this.fb.group({
      descripcion:'',
      institucion:'',
      ubicacion:''
    })
    this.formacion_academica_form.valueChanges.subscribe()
  }

  public  GuardarData(){
    this.portfolioService.post("http://localhost:9090/formacionacademica/crear",
    {
      descripcion: this.formacion_academica_form.value.descripcion,
      institucion:this.formacion_academica_form.value.institucion,
      ubicacion:this.formacion_academica_form.value.ubicacion
    }
    )
    .subscribe(() =>{
    this.formacion_academica_form.reset();      
  });


  }
    
  clickGuardar(){
    this.GuardarData();    
  }

  clickNoGuardar(): void {
    this.dialogRef.close();    
  }

}
