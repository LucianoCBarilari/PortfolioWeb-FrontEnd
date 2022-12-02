import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { LoginComponent } from '../shared/login/login.component';
import { Storage,ref, getDownloadURL,listAll  } from "@angular/fire/storage";

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  images: string[];
  login: any;

  constructor(
    private portfolioService:PortfolioService, 
    public dialog: MatDialog,
    private storage:Storage
             ) { 
              this.images=[];
             }

  ngOnInit(): void {
    this.getimages();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width:'350px',
      height:'350px'
     });
    dialogRef.afterClosed().subscribe();
    }

    public getimages(){
      const imagesRef=ref(this.storage,'images');
  
      listAll(imagesRef)
      .then(async response =>{
        this.images = [];
        for (let item of response.items){
          const url= await getDownloadURL(item);
          this.images.push(url);          
        }
      })
      .catch(error =>console.log(error));      
    }
}
