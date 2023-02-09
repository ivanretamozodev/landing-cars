import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
    selector: 'swiper-details',
    templateUrl: './swiper-details.component.html',
    styleUrls: ['./swiper-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SwiperDetailsComponent implements OnInit {
    thumbsSwiper: any;
    constructor() {}

    ngOnInit(): void {}
}
