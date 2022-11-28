import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private keyToken = sessionStorage.getItem('current'); 
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.keyToken}`});
   options = { headers: this.headers };
 
  constructor(private http:HttpClient) { }

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


}
