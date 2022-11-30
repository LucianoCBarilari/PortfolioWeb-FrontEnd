import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage:any;
  loading:any;

  constructor(
    private fb: FormBuilder,
    private portfolioService : PortfolioService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      username: string,
      password:string
    }) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]      
    })
    this.loginForm.valueChanges.subscribe()
  }

  public  login(){
    this.portfolioService.iniciarSesion("http://localhost:9090/token",
    {
      username: this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    )// suggested change  throwError(() => new Error('test'))
    .subscribe(()=>{});
}
 clickGuardar(){
  this.login();    
}

clickNoGuardar(): void {
  this.dialogRef.close();    
}

get Username(){
  return this.loginForm.get("username");
}
get Password(){
  return this.loginForm.get("password");
}

}
