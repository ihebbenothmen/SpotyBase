import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//User
import { SignupComponent } from './User/Front_end/signup/signup.component';
import { ForgetpasswordComponent } from './User/Front_end/forgotpassword/forgetpassword.component';
import { LoginComponent } from './User/Front_end/login/login.component';
import { ListUsersComponent } from './User/Back_end/list-users/list-users.component';
import { AddUserComponent } from './User/Back_end/add-user/add-user.component';
import { EditprofileComponent } from './User/Front_end/editprofile/editprofile.component';
import { ResetPasswordComponent } from './User/Front_end/reset-password/reset-password.component';
import { CodeActivationComponent } from './User/Front_end/code-activation/code-activation.component';
import { MenuFrontComponent } from './menu-front/menu-front.component';
import { MenuComponent } from './menu/menu.component';
import { LocationDeFichiersB2cComponent } from './location-de-fichiers-b2c/location-de-fichiers-b2c.component';
import { AchatComponent } from './achat/achat.component';


const routes: Routes = [
  {
    path: 'front', component: MenuFrontComponent, children: [
    




    ]
  },
  //user-front
  { path: 'login', component: LoginComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgetpasswordComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'active', component: CodeActivationComponent },
  { path: 'location', component: LocationDeFichiersB2cComponent },
  { path: 'achat', component: AchatComponent },


  
  


  {
    path: '', component: MenuComponent, children: [
    

     

      //Accomodation
      //Agency

      //Agent
    
      //User-dashboard

      { path: 'list_users', component: ListUsersComponent },
      { path: 'add_user_back', component: AddUserComponent },
  
    ]
  },
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
