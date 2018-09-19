import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { APIFotosService } from '../../../apifotos.service';

import {filter, flatMap} from 'rxjs/operators'



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
/*   constructor(private apiFotos: APIFotosService, rotaAtual:ActivatedRoute) { 
    rotaAtual.params
    .subscribe((params => {
      if (params.idFoto){
        httpClient.get('http://localhost:3000/v1/fotos/' + params.idFoto)
          .subscribe((foto => {
            this.foto=foto
          }))
      }
    }))
  } */


  constructor(private apiFotos: APIFotosService, rotaAtual: ActivatedRoute) {
    rotaAtual.params
      .pipe(filter(params => params.idFoto))
      .pipe(flatMap(params => apiFotos.get(params.idFoto)))
      .subscribe(foto => this.foto = foto)
  }


  foto = {}


  enviarFoto(){
    console.log('enviarfoto');
    this.apiFotos.enviar(this.foto)
      .subscribe(() =>{
        alert('deu certo')})
  }


}
