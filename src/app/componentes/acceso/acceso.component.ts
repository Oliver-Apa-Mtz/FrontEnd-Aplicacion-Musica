import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Usuario } from '../../modelos/usuario';
import { GLOBAL } from '../../servicios/global';
import { UsuarioService } from '../../servicios/usuario.service';

declare var JQuery: any;
declare var $: any;

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css'],
  providers: [UsuarioService]
})
export class AccesoComponent implements OnInit {
  public usuario: Usuario;
  public usuarioGuardar: Usuario;
  public formLogin: boolean = true;
  public url: string;
  public mensajeRegistro: any = false;
  public identity: any;
  public token: any;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _usuarioService:UsuarioService
  ) {
    this.url = GLOBAL.url;
    this.usuario = new Usuario('','','','','','',new Date,'')
    this.usuarioGuardar = new Usuario('','','','','','',new Date,'');
  }

  ngOnInit() {

  }

  guardarUsuario(){
    this._usuarioService.guardarUsuario(this.usuarioGuardar).subscribe(
      response => {
        let usuario = response.usuario;
        if(!usuario._id){
          this.mensajeRegistro = ['ion-close-circled', 'Oops!', 'Ocurrio un error al registrarse.'];
        }else{
          this.mensajeRegistro = ['ion-checkmark-circled', 'Bien', 'Te has registrado correctamente, inicia sesión.'];
          this.usuarioGuardar = new Usuario('','','','','','',new Date,'');
        }
      },
      error => {
        this.mensajeRegistro = ['ion-close-circled', 'Oops!', 'Ocurrio un error al registrarse.'];
      }
    )
  }

  iniciarSesion(){
    this._usuarioService.iniciarSesion(this.usuario).subscribe(
      response => {
        let identity = response.usuario;
        this.identity = identity;
        if(!this.identity._id){
          this.mensajeRegistro = this.mensajeRegistro = ['ion-close-circled', 'Oops!', 'Ocurrio un error al iniciar sesión.'];
        }else{
          localStorage.setItem('identity', JSON.stringify(identity));
          this._usuarioService.iniciarSesion(this.usuario, 'true').subscribe(
            response => {
              let token = response.token;
              this.token = token;
              if(this.token.length <= 0){
                this.mensajeRegistro = this.mensajeRegistro = ['ion-close-circled', 'Oops!', 'Ocurrio un error al iniciar sesión.'];
              }else{
                localStorage.setItem('token', token);
                console.log(this.identity);
                console.log(this.token);
                this.usuario = new Usuario('','','','','','',new Date,'');
              }
            },
            error => {
              this.mensajeRegistro = this.mensajeRegistro = ['ion-close-circled', 'Oops!', 'Ocurrio un error al iniciar sesión.'];
            }
          )
        }
      },
      error => {
        this.mensajeRegistro = this.mensajeRegistro = ['ion-close-circled', 'Oops!', 'Ocurrio un error al iniciar sesión.'];
      }
    )
  }

  cambiarFormularios(){
    if(this.formLogin){
      $('.login').css({'left':'-100%'});
      $('.registro').css({'left':'11%'});
      this.formLogin = false;
    }else{
      $('.registro').removeAttr('style');
      $('.login').removeAttr('style');
      this.formLogin = true;
    }
  }

}
