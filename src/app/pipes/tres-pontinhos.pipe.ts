import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tresPontinhos'
})
export class TresPontinhosPipe implements PipeTransform {

  transform(valor: string='',tamanho:number): any {
    return valor.length > tamanho ? valor.substr(0,tamanho) + '...':valor;
  }

}
