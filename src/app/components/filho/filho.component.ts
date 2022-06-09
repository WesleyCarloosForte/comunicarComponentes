import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() Texto:string;
  @Input() Estilos :string;
  @Output() AlteradorEstilo;

  @Input() metodo :any=null;
  constructor() {
    this.Texto="";
    this.Estilos="";
    this.AlteradorEstilo =new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  setEstilo(estilo:string){
    this.AlteradorEstilo.emit(estilo);
  }
  executarMetodo(){
    this.metodo("Componente Filho");

  }

}
