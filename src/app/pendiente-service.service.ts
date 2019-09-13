import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PendienteServiceService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:9099/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8',
      'Cache-Control': 'no-cache'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPendings(): Observable<any> {
    return this.http.get(this.endpoint + 'obteterPendientes').pipe(
      map(this.extractData));
  }

  addPending (pending): Observable<any> {
    console.log(pending);
    return this.http.post<any>(this.endpoint + 'agregarPendiente', pending, this.httpOptions).pipe(
      tap((pending) => console.log(`added pending w/ id=${pending.idPendiente}`)),
      catchError(this.handleError<any>('addPending'))
    );
  }

  updatePending (pending): Observable<any> {
    return this.http.put(this.endpoint + 'actualizarPendiente', pending, this.httpOptions).pipe(
      tap(_ => console.log(`updated pending id=${pending.idPendiente}`)),
      catchError(this.handleError<any>('updatePending'))
    );
  }

  deletePending (idPendiente): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'borrarPendiente/' + idPendiente, this.httpOptions).pipe(
      tap(_ => console.log(`deleted pending id=${idPendiente}`)),
      catchError(this.handleError<any>('deletePending'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
