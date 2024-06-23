import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router,private rout:ActivatedRoute,private authservi:AuthService){}
irPregunta2():void{
  this.router.navigate(["pregunta2"],{relativeTo:this.rout})
}
irPregunta3():void{
  this.router.navigate(["pregunta3"],{relativeTo:this.rout})
}
irPregunta4():void{
  this.router.navigate(["pregunta4"],{relativeTo:this.rout})
}
salir():void{
  this.authservi.logout();
    this.router.navigateByUrl("/login")
}

}
