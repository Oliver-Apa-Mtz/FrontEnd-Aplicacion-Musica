import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Album } from '../../modelos/album';
import { GLOBAL } from '../../servicios/global';
import { AlbumService } from '../../servicios/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumService]
})
export class AlbumsComponent implements OnInit {
  public albums: Album[];
  public url: string;

  constructor(
    private _albumService: AlbumService,
    private _route : ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.url = GLOBAL.url;
    this.obtenerAlbums();
  }

  obtenerAlbums(){
    this._albumService.obtenerAlbums().subscribe(
      response => {
        if(!response.albums){
          console.log('no hay albums');
        }else{
          this.albums = response.albums;
          console.log(this.albums);
        }
      },
      error => {

      }
    )
  }
}
