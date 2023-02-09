import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsPageRoutingModule } from './cars-page-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PageComponent } from './page/page.component';

@NgModule({
    declarations: [PageComponent],
    imports: [CommonModule, CarsPageRoutingModule, SharedModule],
})
export class CarsPageModule {}
