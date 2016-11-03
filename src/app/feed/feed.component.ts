import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    @Output("toggleFeed") toggleFeedEvent = new EventEmitter();
    @Input("feedIsCollapsed") feedIsCollapsed;

    constructor() { }

    ngOnInit() {
    }

    toggleFeed() {
        this.toggleFeedEvent.emit();
    }

}
