import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


 
  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }
  public post(url:string,body: any){
    return this.http.post(url,body);
  }
  
  public delete(url:string){
    return this.http.delete(url);
  }

  public put(url:string,body:any){
    return this.http.put(url,body);
  }


}
