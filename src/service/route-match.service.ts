import { Navigation, NavigationStart, Route, Router, UrlMatchResult, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

const RouterMatcherHelper = {
  cn: '',
  get currentNavigation() {
    return this.cn;
  },
  set currentNavigation(nav: Navigation) {
    this.cn = nav;
  },
  get urlTree(): UrlTree {
    if (this.cn) {
      return (this.cn as Navigation).extractedUrl;
    }
    return undefined;
  }
}

/**
 * Custom Url matcher for matching fragment in the current browser url
 *
 * Usage : Setup route config as follows
 * const route: Route = { ...
 * data: {
 *   matcher: {
 *     fragment: 'new'
 *   }
 * },
 * matcher: urlFragmentMatcher
 * ...
 * }

 * @param url
 * @param group
 * @param route
 */
export function urlFragmentMatcher(url: UrlSegment[], group: UrlSegmentGroup, route: Route): UrlMatchResult {

  const urlTree: UrlTree = RouterMatcherHelper.urlTree;
  if (!urlTree && !(urlTree instanceof UrlTree)) {
    return null;
  }

  if (!urlTree.fragment) {
    // url doesnt contain a fragment; ignore url matching and continue
    return null;
  }

  // read the route data for fragment match config
  const data = route.data;
  if (data && data.matcherconfig) {

    if (urlTree.fragment === data.matcherconfig.fragment) {
      return ({ consumed: url });
    }

  }

  return null;

}

/**
 * Service makes accessible the current navigation object from the Angular router
 *
 * The navigation object is used by the urlFragmentMatcher to match the route for a given
 * fragment.
 *
 */
@Injectable()
export class RouteMatchService {

  constructor(protected readonly router: Router) {

    this.router.events.subscribe(e => {

      if (e instanceof NavigationStart) {

        this.updateCurrentTransition();

      }
    });

    this.updateCurrentTransition();

  }

  updateCurrentTransition() {

    const nav: Navigation = this.router.getCurrentNavigation();
    RouterMatcherHelper.currentNavigation = nav;

  }
}
