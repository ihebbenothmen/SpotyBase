import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MenuFrontComponent } from './menu-front/menu-front.component';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";

import { GalleryModule } from  'ng-gallery';
import { SignupComponent } from './User/Front_end/signup/signup.component';
import { LoginComponent } from './User/Front_end/login/login.component';
import { ForgetpasswordComponent } from './User/Front_end/forgotpassword/forgetpassword.component';
import { ListUsersComponent } from './User/Back_end/list-users/list-users.component';
import { AddUserComponent } from './User/Back_end/add-user/add-user.component';
import { HttpInterceptorService } from './User/security/http-interceptor.service';
import { EditprofileComponent } from './User/Front_end/editprofile/editprofile.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CodeActivationComponent } from './User/Front_end/code-activation/code-activation.component';
import { ResetPasswordComponent } from './User/Front_end/reset-password/reset-password.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { LocationDeFichiersB2cComponent } from './location-de-fichiers-b2c/location-de-fichiers-b2c.component';
import { AchatComponent } from './achat/achat.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuFrontComponent,

    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ListUsersComponent,
    AddUserComponent,
    EditprofileComponent,
    CodeActivationComponent,
    ResetPasswordComponent,
    LocationDeFichiersB2cComponent,
    AchatComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    GalleryModule,
    NgxCaptchaModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '998943596311-agii5b72rppsj1h1tdp5f75mhnfj22s7.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('183705634636738')
          }
        ]
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ], // Add the EmbedVideoService here //lina (EmbedVideoService)
  bootstrap: [AppComponent]
})
export class AppModule { }
