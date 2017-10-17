import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Artista } from '../../modelos/artista';
import { GLOBAL } from '../../servicios/global';
import { ArtistaService } from '../../servicios/artista.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css'],
  providers: [ArtistaService],
})
export class ArtistasComponent implements OnInit {
  public artistas: Artista[];
  public url: string;

  constructor(
    private _artistaService: ArtistaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.obtenerArtistas();
  }

  obtenerArtistas(){
    this._artistaService.obtenerArtistas().subscribe(
      response => {
        if(!response.artistas){
          console.log('no hay artistas');
        }else{
          this.artistas = response.artistas;
          console.log(this.artistas);
        }
      },
      error => {

      }
    )
  }
}
