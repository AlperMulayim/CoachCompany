import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private httpClient : HttpClient) {}

  public getUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>('rest/users/all');
  }
}


export class User{
  public id : number;
  public name : string;
  public password : string;
  public validated : string;
}
