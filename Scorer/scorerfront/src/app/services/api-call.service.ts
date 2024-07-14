import { HttpClient } from '@angular/common/http';
import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient:HttpClient) { }
  getAllMatches() {
    return this.httpClient.get(`${environment.apiUrl}/match`);
  }
  getLiveMatches() {
    return this.httpClient.get(`${environment.apiUrl}/match/liveMatches`);
  }
  getPointsTable() {
    return this.httpClient.get(`${environment.apiUrl}/match/points-table-t20-world-cup-2024`);
  }
}
