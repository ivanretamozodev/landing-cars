import { Component } from '@angular/core';
import { ServiceItem } from 'src/app/core/interfaces/servicesItem.interface';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesSectionComponent {
    servicesitems: ServiceItem[] = [
        {
            number: '01',
            title: 'La Mejor Elección',
            description:
                'entregamos solo autos de la mejor calidad,por lo que no te debes preocupar por que automovil elegir',
        },
        {
            number: '02',
            title: 'Servicios Exclusivos',
            description:
                'estamos preparados para encontrar el auto de tu sueños,el auto de tu nueva realidad,de una manera sencilla',
        },
        {
            number: '03',
            title: 'transaccion segura',
            description: 'el proceso de transaccion es completado en 24hrs, no pierdas tiempo con cosas innesesarias',
        },
    ];
}
