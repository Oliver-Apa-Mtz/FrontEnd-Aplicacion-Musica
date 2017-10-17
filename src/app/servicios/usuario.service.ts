import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Usuario } from '../modelos/usuario';

@Injectable()
export class UsuarioService {
  public url: string;
  constructor(
    private _http: Http
  ){
    this.url = GLOBAL.url;
  }

  guardarUsuario(usuarioGuardar){
    let params = JSON.stringify(usuarioGuardar);
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url + 'registro' + params, {headers: headers})
                     .map(res => res.json());
  }

  iniciarSesion(usuarioIniciar, gethash:any = null){
    if (gethash != null) {
      usuarioIniciar.gethash = gethash;
    }
    let params = JSON.stringify(usuarioIniciar);
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url + 'login' + params, {headers: headers})
                     .map(res => res.json());
  }
}
