import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    { path: 'cars', loadChildren: () => import('./modules/cars/cars-page.module').then((m) => m.CarsPageModule) },
    {
        path: 'details/:id',
        loadChildren: () => import('./modules/details/details.module').then((m) => m.DetailsModule),
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
