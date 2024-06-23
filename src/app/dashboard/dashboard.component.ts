import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
irPregunta2():void{}
irPregunta3():void{}
irPregunta4():void{}
salir():void{}

}
