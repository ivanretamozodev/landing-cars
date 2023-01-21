import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { MasonryComponent } from './components/masonry/masonry.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeroComponent,
        FirstSectionComponent,
        SecondSectionComponent,
        MasonryComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
