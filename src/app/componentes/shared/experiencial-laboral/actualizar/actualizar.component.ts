import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

public ActexperienciaForm: FormGroup;
  
  
  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<ActualizarComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
  

  ngOnInit(): void {
    this.ActexperienciaForm = this.fb.group({
      id:this.data.id,
      empresa: this.data.emp,
      descripcion:this.data.des,
      ubicacion:this.data.ubi
    })
    this.ActexperienciaForm.valueChanges.subscribe();

    

  }

    actualizarData(){
    this.portfolioService.put("http://localhost:9090/experienciaLaboral/actualizar",
    {
      id: this.ActexperienciaForm.value.id,
      empresa: this.ActexperienciaForm.value.empresa,
      descripcion:this.ActexperienciaForm.value.descripcion,
      ubicacion:this.ActexperienciaForm.value.ubicacion
    }
    )
    .subscribe(() =>{
    this.ActexperienciaForm.reset();      
  });


  }
    
  clickGuardar(){       
    this.actualizarData(); 
  }

  clickNoGuardar(): void {
    this.dialogRef.close();    
  }
}
