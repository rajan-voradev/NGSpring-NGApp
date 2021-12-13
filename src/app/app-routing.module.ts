import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyuserComponent } from './dummyuser/dummyuser.component';
import { ErrorCompComponent } from './error-comp/error-comp.component';
import { IntroComponent } from './intro/intro.component';
import { ListDummiesComponent } from './list-dummies/list-dummies.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'intro/:user', component: IntroComponent, canActivate:[RouteGuardService] },
  { path: 'adminlogin', component: LoginComponent },
  { path: 'dummies', component: ListDummiesComponent, canActivate:[RouteGuardService]  },
  { path: 'dummy/:id', component: DummyuserComponent, canActivate:[RouteGuardService]  },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]  },
  { path: '**', component: ErrorCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
