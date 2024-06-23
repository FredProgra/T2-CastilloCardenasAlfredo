import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router,private authservice:AuthService){
  }
submit(usuario:HTMLInputElement,password:HTMLInputElement):void{
  if(usuario.value=="Castillo" && password.value=="12345"){
    this.authservice.login(usuario.value,password.value)
    this.router.navigateByUrl("/dashboard")
  }
  else{ this.router.navigateByUrl("/auth/login")}

}
}