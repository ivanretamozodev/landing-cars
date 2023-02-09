import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [ButtonComponent, CardComponent, NavbarComponent],
    imports: [CommonModule, RouterModule],
    exports: [ButtonComponent, NavbarComponent, CardComponent],
})
export class SharedModule {}
