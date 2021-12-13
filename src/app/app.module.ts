import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { ErrorCompComponent } from './error-comp/error-comp.component';
import { ListDummiesComponent } from './list-dummies/list-dummies.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { DummyuserComponent } from './dummyuser/dummyuser.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    ErrorCompComponent,
    ListDummiesComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    DummyuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
