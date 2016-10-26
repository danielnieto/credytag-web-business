import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
    navIsCollapsed = true;

    constructor() { }

    ngOnInit() {
    }

    onToggleNav() {
        if (this.navIsCollapsed) {
            this.navIsCollapsed = false;
        } else {
            this.navIsCollapsed = true;
        }
    }

}
