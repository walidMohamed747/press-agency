import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin: boolean = false ;
  public user: User | null; 
commonApiUrl = "http://localhost:3000/"

  constructor(private _http:HttpClient) { }

register(data : User):Observable<any>{
return this._http.post(`${this.commonApiUrl}api/user/register` , data)
}

login(data : User):Observable<any>{
  console.log(data)
  return this._http.post(`${this.commonApiUrl}api/user/login` , data)
  }
  logout(data:User):Observable<any>{
    return this._http.post(`${this.commonApiUrl}api/user/logout` , data)
  }
  addpost(data : Post){
    return this._http.post(`${this.commonApiUrl}api/editor/addPost` , data)
  }

  me():Observable<any>{
    return this._http.get(`${this.commonApiUrl}api/user/me`)
  }
}
