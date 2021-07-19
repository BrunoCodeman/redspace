import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Planet } from '../models/planet';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService extends BaseService{

  constructor(public http: HttpClient) { 
    super(http);
  }
  search(queryTerm:string): Observable<ApiResponse<Planet>> {
    return super.search(queryTerm);
  }
}
