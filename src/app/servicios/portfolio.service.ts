import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Storage,ref, getDownloadURL,listAll  } from "@angular/fire/storage";


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  

  public backUrl: string = "https://portfolioweb-backend-production.up.railway.app"

  public keyToken = sessionStorage.getItem('current'); 
  
  private currentUserSubject: BehaviorSubject<any>;
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.keyToken}`});
   options = { headers: this.headers };
 
  constructor(
               private http:HttpClient,
               private storage:Storage                
             ) 
  {
   this.currentUserSubject = new BehaviorSubject((sessionStorage.getItem('current')|| '{}'))    
  }

  public get(url:string){
    return this.http.get(url);
  }
  public post(url:string,body: any){
    return this.http.post(url,body, this.options);
  }
  
  public delete(url:string){
    return this.http.delete(url, this.options);
  }

  public put(url:string,body:any){
    return this.http.put(url,body, this.options);
  }

  public iniciarSesion(url:string,body:any){
    return this.http.post(url,body,{responseType: 'text'})
    .pipe(map(data=>{
      sessionStorage.setItem('current',data);
    return data;
  }));
  } 
  
  public getimages(imagesList:string[]){     
    const imagesRef=ref(this.storage,'images');

    listAll(imagesRef)
    .then(async response =>{
      
      for (let item of response.items){
        const url= await getDownloadURL(item);
        imagesList.push(url);           
      }
    })
    .catch(error =>console.log(error));      
  }
}
