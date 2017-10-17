import { Component, OnInit } from '@angular/core';

declare var JQuery: any;
declare var $: any;

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  public visible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  mostrarMenu(){
    if(!this.visible){
      $('.lateral-der').css({'right': '0px'});
      $('.btn-menu > i').removeClass('ion-navicon-round');
      $('.btn-menu > i').addClass('ion-close-round');
      this.visible = true;
    }else{
      $('.lateral-der').css({'right': '-300px'});
      $('.btn-menu > i').removeClass('ion-close-round');
      $('.btn-menu > i').addClass('ion-navicon-round');
      this.visible = false;
    }
  }
}
