import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Escola } from './escola';
import { API_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  
  private apiURL = API_URL;
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Escola[]> {
    return this.httpClient.get<Escola[]>(`${this.apiURL}/escola`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  inserir(escola): Observable<Escola> {
    return this.httpClient.post<Escola>(`${this.apiURL}/escola`, JSON.stringify(escola), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  buscar(id): Observable<Escola> {
    return this.httpClient.get<Escola>(`${this.apiURL}/escola/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  atualizar(id, escola): Observable<Escola> {
    return this.httpClient.put<Escola>(`${this.apiURL}/escola/${id}`, JSON.stringify(escola), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  excluir(id){
    return this.httpClient.delete<Escola>(`${this.apiURL}/escola/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
