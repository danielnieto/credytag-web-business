import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';

@Injectable()
export class ResponsiveService {

    resize$: Observable<Event>;
    MAX_SCREEN_WIDTH = 986;

    constructor() {
        //create a stream from window's resize event
        this.resize$ = Observable.fromEvent(window, "resize").startWith(this.getScreenWidth());
    }

    // returns an observable which is the current width of the screen
    screenWidth(): Observable<number> {
        return this.resize$
            .map(() => this.getScreenWidth())
            .distinctUntilChanged();
    }

    // get maximum (supported) screen width
    getMaxScreenWidth(): number {
        return this.MAX_SCREEN_WIDTH;
    }

    // returns the current document width
    getScreenWidth(): number {
        return window.document.documentElement.clientWidth;
    }

}
