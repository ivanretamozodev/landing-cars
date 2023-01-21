import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SwiperComponents {
    config: SwiperOptions = {
        slidesPerView: 1.135,
        spaceBetween: 5,
        navigation: true,
        breakpoints: {
            '375': {
                slidesPerView: 1.2,
                spaceBetween: 5,
            },
            '425': {
                slidesPerView: 1.4,
                spaceBetween: 20,
            },
            '720': {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 2.4,
                spaceBetween: 5,
            },
            '992': {
                slidesPerView: 3.1,
                spaceBetween: 5,
            },
            '1200': {
                slidesPerView: 4.1,
                spaceBetween: 20,
            },
            '1400': {
                slidesPerView: 4.4,
                spaceBetween: 20,
            },
        },
        pagination: { clickable: true },
    };
}
