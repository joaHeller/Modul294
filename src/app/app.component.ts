import { Component } from '@angular/core';
import { AppAuthService } from './service/app.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private authService: AppAuthService){
    
  }
  title = 'angular-init';
  public login(){
    this.authService.login();
       
  }
}


