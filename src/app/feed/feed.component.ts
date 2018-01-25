import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ResponsiveService } from "../responsive.service";

@Component({
    selector: "app-feed",
    templateUrl: "./feed.component.html",
    styleUrls: ["./feed.component.scss"]
})
export class FeedComponent implements OnInit {

  constructor(public responsiveService: ResponsiveService) {}

  ngOnInit() {}

}
