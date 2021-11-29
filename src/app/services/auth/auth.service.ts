import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>( `${environment.servicios.serverBackend}` + 'auth', {username, password})
        .pipe(
          map(result => {
            //const expiresAt = moment().add(result.expiresIn,'second');
            localStorage.setItem('access_token', result.token);
            //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
            return true;
          })
        );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem("expires_at");
  }
  
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') != null);
  }

}
