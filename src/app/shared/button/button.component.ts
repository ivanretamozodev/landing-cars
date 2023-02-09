import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
        <ng-container *ngIf="size === 'full'">
            <button routerLink="/cars" class="full-btn">
                {{ text }}
                <i class="bi bi-arrow-right"></i>
            </button>
        </ng-container>
        <ng-container *ngIf="size === 'large'">
            <button routerlink="/cars" class="large-btn">
                {{ text }}
                <i class="bi bi-arrow-right"></i>
            </button>
        </ng-container>
    `,
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() text: string = 'Ver Catálogo';
    @Input() size: string = 'large';
}
