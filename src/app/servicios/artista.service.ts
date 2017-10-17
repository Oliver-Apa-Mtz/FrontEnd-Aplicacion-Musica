import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Artista } from '../modelos/artista';

@Injectable()
export class ArtistaService{
  public url: string;

  constructor(
    private _http: Http
  ){
    this.url = GLOBAL.url;
  }

  obtenerArtistas(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.url+'obtener-artistas')
                     .map(res => res.json());
  }
}
