import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';    
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpXSRFInterceptor } from './interceptor/http.csrf.interceptor';
import { AppAuthService } from './service/app.auth.service';
import { IsInRoleDirective } from './dir/is.in.role.dir';
import { IsInRolesDirective } from './dir/is.in.roles.dir';
import { RouterModule } from '@angular/router';
import { Page6Component } from './pages/page6/page6.component';
import { Page7Component } from './pages/page7/page7.component';
import { Page8Component } from './pages/page8/page8.component';
import { HeaderComponent } from './component/header/header.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { CookComponent } from './cook/cook.component';


export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/ILV',
  requireHttps: false,
  redirectUri: 'http://localhost:4200',
  postLogoutRedirectUri: 'http://localhost:4200',
  clientId: 'demoapp',
  scope: 'openid profile roles offline_access',
  responseType: 'code',
  showDebugInformation: true,
  requestAccessToken: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshTimeout: 500,
  clearHashAfterLogin: true,
};

export function storageFactory(): OAuthStorage {
  return sessionStorage;
}



@NgModule({
  declarations: [
    AppComponent, 
    Page1Component, 
    Page2Component, 
    Page3Component, 
    IsInRoleDirective, 
    IsInRolesDirective, 
    Page6Component, 
    Page7Component, 
    Page8Component, 
    HeaderComponent, 
    NavigationComponent, 
    CookComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule, 
    AppRoutingModule, 
    MatButtonModule, 
    HttpClientModule, 
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    OAuthModule.forRoot({resourceServer: {sendAccessToken: true}}),],
  providers: [provideAnimationsAsync(), {provide: AuthConfig, useValue: authConfig},
    {provide: HTTP_INTERCEPTORS, useClass: HttpXSRFInterceptor, multi: true},
    {
      provide: OAuthStorage, useFactory: storageFactory
    },
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent],
})

export class AppModule{
  constructor(authService: AppAuthService) {
    authService.initAuth().finally();
  }
}

HttpClientXsrfModule.withOptions({
  cookieName: 'XSRF-TOKEN',
  headerName: 'X-XSRF-TOKEN'
})


