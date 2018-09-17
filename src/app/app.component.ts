import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caelumpic';

  fotos = []

  constructor(http: HttpClient){
    http.get('http://localhost:3000/v1/fotos')
      .subscribe((resp: Array<any>) => {
        this.fotos = resp
      })


    /*fetch('http://localhost:3000/v1/fotos')
    .then((respParcial) => {
      return respParcial.json()
    })
    .then((resp) => {
      this.fotos = resp
    })
    */
  }
}
