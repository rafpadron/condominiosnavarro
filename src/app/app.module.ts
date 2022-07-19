import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';
import { ItemIconComponent } from './components/shared/item-icon/item-icon.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    SliderComponent,
    CardsComponent,
    ItemIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
