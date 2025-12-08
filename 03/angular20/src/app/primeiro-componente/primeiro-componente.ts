import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css'
})
export class PrimeiroComponente 
{
  nome:string = 'Angular';
  // multiplicarValor(a:number, b:number):number 
  // {
  //   return valor * 2;
  // }
  idade:number = 10;
  mensagem():string 
  {
    return 'Seja bem-vindo ao Angular!'   

  };
  media:number = 6.5;
  // media(n1:number, n2:number, n3:number):number 
  // {
  //   return (n1 + n2 + n3) / 3;   
  // }
  pessoa =
  {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
  }
};
 
