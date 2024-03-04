import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private url = `${environment.URL_API_GATEWAY}/cards`;


  constructor(
    private httpClient: HttpClient
  ) { }


  public getMessage(numessage:number): Observable<any> {
    let params: HttpParams = new HttpParams()
    .set('nmessage', numessage)
    return this.httpClient.post<any>(`${this.url}?${params}`,{})
  }



}
