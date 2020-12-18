import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { Team } from '../interfaces/team';
import { League } from '../interfaces/league';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FdjService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>('/api/get-leagues')
      .pipe(
        tap(leagues => console.log('leagues retrieved!')),
        catchError(this.handleError<League[]>('Get Leagues', []))
      );
  }

  getTeams(id): Observable<Team[]> {
    return this.http.get<Team[]>('/api/get-teams/' + id)
      .pipe(
        tap(_ => console.log(`Teams by league id: ${id}`)),
        catchError(this.handleError<Team[]>(`Get teams by league id=${id}`))
      );
  }

  getPlayers(id): Observable<Player[]> {
    return this.http.get<Player[]>('/api/get-players/' + id)
      .pipe(
        tap(_ => console.log(`Players by team id: ${id}`)),
        catchError(this.handleError<Player[]>(`Get players by team id=${id}`))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
