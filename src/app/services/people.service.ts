import { HttpClient } from '@angular/common/http';
import { rendererTypeName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Person } from '../models/person';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends BaseService{
  
  constructor(public http: HttpClient) { 
    super(http);
  }
  
  search(queryTerm:string): Observable<ApiResponse<Person>> {
    return super.search(queryTerm);
  }
  
}
