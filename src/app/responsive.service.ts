
import {fromEvent as observableFromEvent, Observable, BehaviorSubject} from 'rxjs';

import {distinctUntilChanged, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ResponsiveService {
  resize$: Observable<Event>;
  MAX_SCREEN_WIDTH = 986;
  private navIsCollapsed$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private feedIsCollapsed$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
    // create a stream from window's resize event
        this.resize$ = observableFromEvent(window, 'resize');
  }

  // returns an observable which is the current width of the screen
  screenWidth(): Observable<number> {
        return this.resize$.pipe(map(() => this.getScreenWidth()),distinctUntilChanged(),);
  }

  // get maximum (supported) screen width
  getMaxScreenWidth(): number {
    return this.MAX_SCREEN_WIDTH;
  }

  // returns the current document width
  getScreenWidth(): number {
    return window.document.documentElement.clientWidth;
  }

  collapseNav(): void {
    this.navIsCollapsed$.next(true);
  }

  expandNav(): void {
    this.navIsCollapsed$.next(false);
  }

  toggleNav(): void {
    if (this.navIsCollapsed$.getValue() === true) {
      this.expandNav();
    } else {
      this.collapseNav();
    }
  }

  collapseFeed(): void {
    this.feedIsCollapsed$.next(true);
  }

  expandFeed(): void {
    this.feedIsCollapsed$.next(false);
  }

  toggleFeed(): void {
    if (this.feedIsCollapsed$.getValue() === true) {
      this.expandFeed();
    } else {
      this.collapseFeed();
    }
  }

  get navIsCollapsed(): Boolean {
    return this.navIsCollapsed$.getValue();
  }

  get feedIsCollapsed(): Boolean {
    return this.feedIsCollapsed$.getValue();
  }
}
