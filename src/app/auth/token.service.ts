import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken() {
      return !!this.getToken();
      //for nulo, a primeira exclamação trocará para "verdadeiro", e a segunda, para "falso",
  }

  setToken(token) {
      window.localStorage.setItem(KEY, token);
  }

  getToken() {
      return window.localStorage.getItem(KEY);
  }

  removeToken() {
      window.localStorage.removeItem(KEY);
  }

}
