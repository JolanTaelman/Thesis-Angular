import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private readonly _tokenKey = "currentUser";
  private _user$: BehaviorSubject<string>;
  private readonly _url = 'http://localhost:3000';

  public redirectUrl: string;


  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if(parsedToken){
      if (parsedToken) {
        const expires =
          new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
        if (expires) {
          localStorage.removeItem(this._tokenKey);
          parsedToken = null;
        }
      }
      this._user$ = new BehaviorSubject<string>(
        parsedToken && parsedToken.username
      );
    }
  }




  loginGithub(): Observable<boolean> {
    return this.http.post(`${this._url}/auth/github`, {}).pipe(
      map((res: any) => {
        const token = res.token;
        console.log("res is equal to: ", res)
        console.log("res token is equal to: ", res.token)
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    if (this._user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }
  
  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

}


function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split(".")[1];
  const base64 = base64Token.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}
