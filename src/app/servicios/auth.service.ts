import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, observable } from "rxjs";
import { PortfolioService } from './portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:9090/token";

  
  private currentUserSubject: BehaviorSubject<any>;

  constructor(private portfolioService:PortfolioService,private http:HttpClient) 
  { 
    console.log("service running");
    this.currentUserSubject = new BehaviorSubject((sessionStorage.getItem('current')|| '{}')) 
  }
  


  iniciarSesion()
  {
    return this.http.post(this.url,
      {
        "username":"user",
        "password":"user"
      },
      {
        responseType: 'text'
      }
      )
      .pipe(map(data=>{
          sessionStorage.setItem('current',data);
          return data;          
      }));

  }

  
}
