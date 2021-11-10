import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { About } from 'src/app/models/about';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  aboutInfo: About = new About();

  constructor( private http: HttpClient) {
    this.getAboutInfo();
   }

  getAboutInfo() {
    this.http
      .get(`${environment.servicios.obtenerAbout}` )
      .toPromise()
      .then((response: any) => {
        this.aboutInfo = response;
      });
  }

  getAbout(): Observable<any> {
    return this.http.get<About>( `${environment.servicios.urlservice}` + 'about.json').pipe(
      catchError (e => {
        if (e.status === 0 || e.status === 500) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}
