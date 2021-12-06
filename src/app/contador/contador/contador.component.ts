import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template: `
    <h1>Contador</h1>
    <p>Valor: {{ contador }}</p>
    <button (click)="incrementar()">+</button>
    <button (click)="decrementar()">-</button>
  `,
})
export class ContadorComponent {
  contador: number;
  constructor() {
    this.contador = 0;
  }
  ngOnInit() {}
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
}
