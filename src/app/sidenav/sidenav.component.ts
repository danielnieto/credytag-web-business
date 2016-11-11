import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

    @Output("toggleNav") toggleNavEvent = new EventEmitter();
    @Input("navIsCollapsed") navIsCollapsed;

    tabs = [
        {name: "Cobros", icon: "money"},
        {name: "Códigos QR", icon: "qrcode"},
        {name: "Estadísticas", icon: "pie-chart"},
        {name: "Productos", icon: "shopping-cart"},
        {name: "Tickets", icon: "ticket"},
        {name: "Promociones", icon: "trophy"},
        {name: "Sucursales", icon: "building"},
        {name: "Preferencias", icon: "cog"}
    ]

    constructor() { }

    ngOnInit() {
    }

    toggleNav() {
        this.toggleNavEvent.emit();
    }

}
