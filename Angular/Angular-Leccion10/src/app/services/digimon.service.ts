import { Injectable } from '@angular/core';
import { DigimonResponse } from '../models/interfaces/digimonResponse.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findDigimons(): Observable<DigimonResponse>{
    return this.httpClient.get<DigimonResponse>('https://www.digi-api.com/api/v1/digimon')
  }
}
