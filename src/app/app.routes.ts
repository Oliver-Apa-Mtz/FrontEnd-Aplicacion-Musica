import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { ArtistasComponent } from './componentes/artistas/artistas.component';
import { AlbumsComponent } from './componentes/albums/albums.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: AccesoComponent },
  { path: 'artists', component: ArtistasComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
