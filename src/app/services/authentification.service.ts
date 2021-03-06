import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import Cookies from "js-cookie";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }


  signup(user: User)  {
    const url = environment["apiURL"]+"/auth/signup";
    return this.http.post(url,user)
  }

  signin(user: User) {
    const url = environment["apiURL"]+"/auth/signin";
    console.log("==> "+url)
    return this.http.post<Array<String>>(url,user)
  }

  isAuth(){
   if (Cookies.get("isAuth")=='true') return true;
   return false;
  }

  SignOut() {
    Cookies.remove("isAuth")
    Cookies.remove("email")
  }
}
