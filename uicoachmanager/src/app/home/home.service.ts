import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private httpClient : HttpClient) {}

  public getUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>('rest/users/all');
  }

  public createUser(user : User) : void{
    let httpHeaders : HttpHeaders = new HttpHeaders().set('Content-Type','application/json');

    let options = {
      headers:httpHeaders
    }
    console.log("user :", user);
     this.httpClient.post<User>('rest/users',user).subscribe(()=>{});
  }
}


export class User{

  public name : string;
  public password : string;
  public validated : boolean;
  constructor(){}
}
