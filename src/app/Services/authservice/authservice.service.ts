import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn =false

  constructor() { }
  login(){
    this.isLoggedIn=true
  }

  logout(){
    this.isLoggedIn=false

  }
  isAuthenticated(){
   // return this.isLoggedIn
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{
       resolve(this.isLoggedIn)
     }, 1000)
   })
  }
}
