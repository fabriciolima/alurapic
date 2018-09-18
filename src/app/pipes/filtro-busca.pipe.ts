import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusca'
})
export class FiltroBuscaPipe implements PipeTransform {

  transform(lista:Array<any>,termo:String=''): Array<any> {
    console.log("==>"+termo);
    return lista.filter(
      item=>item.titulo.toLowerCase().includes(termo.toLocaleLowerCase())
    )
  }

}
