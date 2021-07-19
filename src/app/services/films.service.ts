import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Film } from '../models/film';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends BaseService{

  constructor(public http: HttpClient) { super(http);}
  search(queryTerm:string): Observable<ApiResponse<Film>> {
    return super.search(queryTerm);
  }
}
