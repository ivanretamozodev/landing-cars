import { SharedModule } from './../../shared/shared.module';
import { ServicesSectionComponent } from './components/services-component/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us-component/about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
    declarations: [AboutUsComponent, HeroComponent, NavbarComponent, ServicesSectionComponent, PageComponent],
    imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
