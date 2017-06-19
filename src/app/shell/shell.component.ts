import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
    navIsCollapsed = true;
    feedIsCollapsed = true;

    SIDENAV_COLLAPSE_TRESHOLD_MIN = 986;
    SIDENAV_COLLAPSE_TRESHOLD_MAX = 1192;
    FEED_COLLAPSE_TRESHOLD_MAX = 1410;

    maxScreenWidth: number;

    constructor(private responsiveService: ResponsiveService) {}

    ngOnInit() {
        // get the max width supported for the container
        this.maxScreenWidth = this.responsiveService.getMaxScreenWidth();

        this.collapseSidenav(this.responsiveService.getScreenWidth());
        this.collapseFeed(this.responsiveService.getScreenWidth());

        this.responsiveService.screenWidth().subscribe((val) => {
            this.collapseSidenav(val);
            this.collapseFeed(val);
        });

    }

    collapseSidenav(screenWidth:number): void{

        if (!this.navIsCollapsed && screenWidth < this.SIDENAV_COLLAPSE_TRESHOLD_MIN) {
            this.navIsCollapsed = true;
        }

        if (this.navIsCollapsed && screenWidth >= this.SIDENAV_COLLAPSE_TRESHOLD_MAX) {
            this.navIsCollapsed = false;
        }
    }

    collapseFeed(screenWidth: number): void{

        if (this.feedIsCollapsed && screenWidth >= this.FEED_COLLAPSE_TRESHOLD_MAX) {
            this.feedIsCollapsed = false;
        }

    }

}
