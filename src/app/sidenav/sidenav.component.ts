import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

    @Output("toggleNav") toggleNavEvent = new EventEmitter();
    @Input("navIsCollapsed") navIsCollapsed;

    constructor() { }

    ngOnInit() {
    }

    toggleNav() {
        this.toggleNavEvent.emit();
    }

}
