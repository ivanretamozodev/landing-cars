import { Component, OnInit } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  brands: Array<Brand> = [
    {
      path: '../../../assets/brands/brand1.png',
    },
    {
      path: '../../../assets/brands/brand2.png',
    },
    {
      path: '../../../assets/brands/brand3.png',
    },

    {
      path: '../../../assets/brands/brand4.png',
    },

    {
      path: '../../../assets/brands/brand5.png',
    },

    {
      path: '../../../assets/brands/brand6.png',
    },

    {
      path: '../../../assets/brands/brand7.png',
    },

    {
      path: '../../../assets/brands/brand8.png',
    },

    {
      path: '../../../assets/brands/brand9.png',
    },

    {
      path: '../../../assets/brands/brand10.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
