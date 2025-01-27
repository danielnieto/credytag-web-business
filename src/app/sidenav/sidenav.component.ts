import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    navItems = [
        {name: 'Cobros', icon: 'money', route: 'cobros'},
        {name: 'Códigos QR', icon: 'qrcode', route: 'codigos-qr'},
        {name: 'Cuenta Bancaria', icon: 'bank', route: 'cuenta-bancaria'},
        {name: 'Ajustes', icon: 'cog', route: 'ajustes'},
        {name: 'Cerrar Sesión', icon: 'sign-out', route: 'logout' }
    ];

    activeNavItem = this.navItems[0];

    constructor(public responsiveService: ResponsiveService) {}

    ngOnInit() {
    }

    onClickNavItem(navItem: any) {
        this.activeNavItem = navItem;
    }

}
