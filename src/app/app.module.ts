import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { ArtistasComponent } from './componentes/artistas/artistas.component';
import { AlbumsComponent } from './componentes/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    AccesoComponent,
    ArtistasComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
