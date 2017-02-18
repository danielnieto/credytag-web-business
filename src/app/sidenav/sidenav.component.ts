import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

    @Output("toggleNav") toggleNavEvent = new EventEmitter();
    @Input("navIsCollapsed") navIsCollapsed;

    navItems = [
        {name: "Cobros", icon: "money", route: "cobros"},
        {name: "Códigos QR", icon: "qrcode", route: "codigos-qr"},
        {name: "Preferencias", icon: "cog", route: "preferencias"}
    ]

    activeNavItem = this.navItems[0];

    constructor() { }

    ngOnInit() {
    }

    toggleNav() {
        this.toggleNavEvent.emit();
    }

    onClickNavItem(navItem:any){
        this.activeNavItem = navItem;
    }

}
