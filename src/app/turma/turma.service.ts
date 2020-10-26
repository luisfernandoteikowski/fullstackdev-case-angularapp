import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Turma } from './turma';
import { API_URL } from '../config';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private apiURL = API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listarTurmasDaEscola(escolaId): Observable<Turma[]> {
    return this.httpClient
      .get<Turma[]>(`${this.apiURL}/turma/${escolaId}`)
      .pipe(catchError(this.errorHandler));
  }

  inserir(turma): Observable<Turma> {
    return this.httpClient
      .post<Turma>(
        `${this.apiURL}/turma`,
        JSON.stringify(turma),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  buscar(escolaId, id): Observable<Turma> {
    return this.httpClient
      .get<Turma>(`${this.apiURL}/turma/${escolaId}/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  atualizar(escolaId, id, turma): Observable<Turma> {
    return this.httpClient
      .put<Turma>(
        `${this.apiURL}/turma/${escolaId}/${id}`,
        JSON.stringify(turma),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  excluir(id) {
    return this.httpClient
      .delete<Turma>(`${this.apiURL}/turma/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
