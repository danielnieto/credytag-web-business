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

    SIDENAV_COLLAPSE_THRESHOLD_MIN = 986;
    SIDENAV_COLLAPSE_THRESHOLD_MAX = 1192;
    FEED_COLLAPSE_THRESHOLD_MAX = 1410;

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

        if (!this.navIsCollapsed && screenWidth < this.SIDENAV_COLLAPSE_THRESHOLD_MIN) {
            this.navIsCollapsed = true;
            this.responsiveService.navIsCollapsed$.next(true);
        }

        if (this.navIsCollapsed && screenWidth >= this.SIDENAV_COLLAPSE_THRESHOLD_MAX) {
            this.navIsCollapsed = false;
            this.responsiveService.navIsCollapsed$.next(false);
        }
    }

    collapseFeed(screenWidth: number): void{

        if (this.feedIsCollapsed && screenWidth >= this.FEED_COLLAPSE_THRESHOLD_MAX) {
            this.feedIsCollapsed = false;
        }

    }

}
