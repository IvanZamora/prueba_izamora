import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private url:string = "https://swapi.dev/api/";

  constructor(private http: HttpClient) {

  }

  public getPeople(): Observable<any> {
    return this.http.get<any>(this.url+"/people").pipe(map(_ => _.results));
  }
}
