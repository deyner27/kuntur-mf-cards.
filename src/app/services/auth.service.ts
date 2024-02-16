import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.URL_API_GATEWAY}`;

  constructor(
    private httpClient: HttpClient
  ) { }

  //Verificar si el usuario esta logeado en api gateway
  async isAuth(): Promise<boolean> {
    let params: HttpParams = new HttpParams().set('auth', 'validateSession');

    try {
      const res: any = await this.httpClient.get<any>(`${this.url}/logeo`, { params }).toPromise();
      return res.validSession;
    } catch (err) {
      console.error('Error:', err);
      return false;
    }
  }

  getToken(): string {
    //Buscamos el key que tenga el accessToken, y retornamos el token
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).endsWith('accessToken')) {
        return localStorage.getItem(localStorage.key(i));
      }
    }
    return null;
  }


}
