import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    isOpen: boolean = false;
    mobile: boolean = true;
    constructor(private _router: Router) {}

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }

    navigateTo(route: string): void {
        this._router.navigate([`${route}`]);
        this.isOpen = false;
    }
}
