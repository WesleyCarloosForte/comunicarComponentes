import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  Estilos:string;
  EstilosEnviar:string;
  TextoEnviar:string;

  constructor() {
    this.EstilosEnviar="";
    this.Estilos="";
    this.TextoEnviar="";
  }

  ngOnInit(): void {
  }


  modificarMetodo(msg:string){
   alert(`${msg} executando metodo recebido`);
  }

  setEstilo(estilo:string){
  this.EstilosEnviar=estilo;
  }

  alterarEstilo(event:string){
    this.Estilos=event;
  }
}
