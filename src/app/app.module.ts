import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroComponent, CarouselComponent],
  imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
