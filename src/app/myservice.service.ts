import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
auth(email,password)
{
 if(email=='mark@gmail.com'&&password=='mark@123')
 {
   localStorage.setItem('email','password')
   return 1;
 }
 else{
   return 0;
 }
 
}
}

