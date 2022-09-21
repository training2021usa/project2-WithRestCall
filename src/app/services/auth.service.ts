import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../model/Auth';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }

  findAuth():Observable<Auth[]>{

       return this.http.get<Auth[]> ("http://localhost:444/version1/giveAllAuth");
  }



}
