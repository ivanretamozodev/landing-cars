/*
 *MODULOS CREADOS POR ANGULAR
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
 *MODULOS DE TERCEROS
 */
import { SwiperModule } from 'swiper/angular';
/*
 *MODULOS CREADOS POR MI
 */
import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
/*
 *COMPONENTES
 */
import { PageComponent } from './page/page.component';
import { SwiperDetailsComponent } from './components/swiper-details/swiper-details.component';
import { InfoComponent } from './components/info/info.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
    declarations: [PageComponent, SwiperDetailsComponent, InfoComponent, FeaturesComponent],
    imports: [CommonModule, DetailsRoutingModule, SwiperModule, SharedModule],
})
export class DetailsModule {}
