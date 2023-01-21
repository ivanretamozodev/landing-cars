/*
 *MODULOS CREADOS POR ANGULAR
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/*
 *MODULOS DE TERCEROS
 */
import { SwiperModule } from 'swiper/angular';
/*
 *MODULOS CREADOS POR MI
 */
import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
/*
 *COMPONENTES
 */
import { PageComponent } from './page/page.component';
import { ServicesSectionComponent } from './components/services-component/services.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us-component/about-us.component';
import { SwiperComponents } from './components/swiper/swiper.component';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
    declarations: [
        AboutUsComponent,
        HeroComponent,
        NavbarComponent,
        ServicesSectionComponent,
        PageComponent,
        SwiperComponents,
        CatalogComponent,
    ],
    imports: [CommonModule, HomeRoutingModule, SharedModule, RouterModule, SwiperModule],
})
export class HomeModule {}
