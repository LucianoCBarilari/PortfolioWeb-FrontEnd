import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-nuev-exp',
  templateUrl: './nuev-exp.component.html',
  styleUrls: ['./nuev-exp.component.css']
})
export class NuevExpComponent implements OnInit {

  experienciaForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<NuevExpComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      empresa: string,
      descripcion:string,
      ubicacion:string
    }) {}
  

  ngOnInit(): void {
    this.experienciaForm = this.fb.group({
      empresa:'',
      descripcion:'',
      ubicacion:''
    })
    this.experienciaForm.valueChanges.subscribe()

  }

  public  GuardarData2(){
    this.portfolioService.post(`${this.portfolioService.backUrl}/experienciaLaboral/crear`,
    {
      empresa: this.experienciaForm.value.empresa,
      descripcion:this.experienciaForm.value.descripcion,
      ubicacion:this.experienciaForm.value.ubicacion
    }
    )
    .subscribe(() =>{
    this.experienciaForm.reset();      
  });


  }
    
  clickGuardar(){
    this.GuardarData2();    
  }

  clickNoGuardar(): void {
    this.dialogRef.close();    
  }
}
