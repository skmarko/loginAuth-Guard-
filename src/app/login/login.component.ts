import { Component, OnInit } from '@angular/core';

import { MyserviceService } from '../myservice.service';
import {  FormBuilder ,FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title= "loginForm"
model:any={};
  formdata:FormGroup
  submitted= false
  
  constructor(private router:Router, private formBuilder:FormBuilder,private myservice:MyserviceService){}
  
  ngOnInit(){
    this.formdata=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
    
  }
  
  get f(){ return this.formdata.controls;}
  onSubmit(){
    this.submitted=true;
    if(this.formdata.invalid){
      return;
    }
  
    //console.log(this.formdata.value);
    let response=this.myservice.auth(this.formdata.value.email,this.formdata.value.password);
     if(response==1)
     {
       alert('login success');
       
     this.router.navigate(['desh']);
     }
     else{
      alert('login unsuccess');
     }
     
    }
  
}
