import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {//implements OnInit {

  /* constructor() { }

  ngOnInit() {
  }
 */

  fotos = []
  
  httpCliente: HttpClient;
  constructor(http: HttpClient){
    this.httpCliente = http;
    http.get('http://localhost:3000/v1/fotos')
      .subscribe((resp: Array<any>) => {
        this.fotos = resp
      })
    }


    /*fetch('http://localhost:3000/v1/fotos')
    .then((respParcial) => {
      return respParcial.json()
    })
    .then((resp) => {
      this.fotos = resp
    })
    */
  

  apagaFoto(fotoRemover){
    this.httpCliente.delete('http://localhost:3000/v1/fotos/'+fotoRemover._id)
      .subscribe(()=> {
        this.fotos = this.fotos.filter(
          foto=> foto._id!==fotoRemover._id
        )
        console.log('Apagou');
      }) 
  }

}
