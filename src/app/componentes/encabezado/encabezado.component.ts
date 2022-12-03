import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { LoginComponent } from '../shared/login/login.component';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  
  login: any;
  imagenComponente:string[];

  constructor(
    private portfolioService:PortfolioService, 
    public dialog: MatDialog    
             ) { 
              
             }

  ngOnInit(): void {
    this.imagenComponente=[];
    this.portfolioService.getimages(this.imagenComponente);    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width:'350px',
      height:'350px'
     });
    dialogRef.afterClosed().subscribe();
    }

    logOut(){
      sessionStorage.removeItem('current');
      this.portfolioService.keyToken = sessionStorage.getItem('current');
    }

}
