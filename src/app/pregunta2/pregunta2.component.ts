import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  mostrarResultado=false
  resultadofinal=""
  pregunta2={
    precio:null,
    cantidad:null
  }
  calcularMonto():void{
   var prec=Number(this.pregunta2.precio);
   var cant=Number(this.pregunta2.cantidad);
   var res =0;
   if(cant>=20){
   var res=0.1*prec*cant;
  }else if(cant>=10 && cant<20){
    var res=0.05*prec*cant;
  }else{   var res=0.05*prec*cant;}
  this.mostrarResultado=true;
  this.resultadofinal="Monto final es ="+res;
}
}
