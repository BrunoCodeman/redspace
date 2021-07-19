import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  _url!:string;
  _searchUrl!:string;

  constructor(public http: HttpClient) {
    const _baseUrl = "https://swapi.dev/api";
    const className = this.constructor.name.toLowerCase().replace("service","");
    this._url = `${_baseUrl}/${className}/`;
    this._searchUrl=`${this._url}?search=`;
   }

   search(queryTerm:string): Observable<ApiResponse<any>> {
    const searchDataUrl = `${this._searchUrl}${queryTerm}`;
    return this.http.get<ApiResponse<any>>(searchDataUrl);
   }
   
   
}
