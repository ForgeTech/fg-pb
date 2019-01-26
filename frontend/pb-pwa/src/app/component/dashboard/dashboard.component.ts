import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseComponent } from '../fg-component-base/fg-component-base.component';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { ObservableQuery } from 'apollo-client';
/**
 * DashboardComponent -
 * Render dashboard displaying collected set of powerbot api-data
 */
@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent extends FgComponentBaseComponent {
  /**
   * Observable to providing view-data for dashboard-component
   */
  public request$: ObservableQuery;
  /**
   * Observable preparing the data for view on request updates
   */
  public data$: Subject<any> = new Subject();
  /**
   * Observable to push a breakpoints grid-properties
   */
  public grid$: Subject<any>;
  /**
   * Observable to push a breakpoints cards-properties
   */
  public cards$: Subject<any>;
  /**
   * CONSTRUCTOR
   */
  constructor(
    /**
     * Provide component-service to dashboard-component
     */
    public $component: FgComponentBaseService
    ) {
    super(
      $component
    );
    this.request$ = this.$component.$apollo.watchQuery(`
      query view($id: Int!) {
        getView(id: $id) @client {
          id
          name
          breakpoints {
            id
            name
            validFor
            cards {
              id
              cols
              rows
              template
              title
            }
            grid {
              id
              cols
              gutterSize
              rowHeight
            }
          }
        }
      }`,
      { id: 0 }
    );
    // Subscribe to result of view-data request
    this._subscribtions.push(
      this.request$.subscribe( result => {
        this.data$.next(result.data.getView);
      })
    );
    // Subscribe to set view-data
    this._subscribtions.push(
      this.data$.subscribe( view => {
        console.log( 'CALLED ON INIT!' );
        const viewBreakpoint = this.getMatchedViewBreakpoint(view.breakpoints, this.$component.$breakpoint.matchedBreakpoints);
        this.grid$ = new BehaviorSubject( viewBreakpoint.grid );
        this.cards$ = new BehaviorSubject( viewBreakpoint.cards );

      })
    );
    // Subscribe to breakpoint changes
    const combinedBreakpointData$ = combineLatest( this.data$, this.$component.$breakpoint.matchedBreakpoints$ );
    this._subscribtions.push( combinedBreakpointData$.subscribe(
      ( [ view , matchedBreakpoints ] ) => {
        const viewBreakpoint = this.getMatchedViewBreakpoint( view.breakpoints, matchedBreakpoints );
        this.grid$.next( viewBreakpoint.grid );
        this.cards$.next( viewBreakpoint.cards );
      } )
    );

  }
  /**
   * Methode for finding matching view-breakpoint and pushing it's
   * values to grid$- and cards$-observable
   */
  getMatchedViewBreakpoint( breakpoints: string[], matchedBreakpoints: string[], ): any {
    console.log('REACT TO BREAKPOINT' );
    console.log( breakpoints );
    console.log( matchedBreakpoints );
    let breakpointMatched: any = null;
    for ( let i = 0; i < breakpoints.length; i++) {
      // tslint:disable-next-line prefer-const
      let viewBreakpoint: any = breakpoints[i];
      for ( let i2 = 0; i2 < viewBreakpoint.validFor.length; i2++ ) {
        // tslint:disable-next-line prefer-const
        let validBreakpoint: string = viewBreakpoint.validFor[i2];
        if ( matchedBreakpoints.indexOf(validBreakpoint) !== -1 ) {
          console.log('FOUND BREAKPOINT');
          console.log( viewBreakpoint );
          breakpointMatched = viewBreakpoint;
          break;
        }
      }
      // If breakpoint is matched skip rest
      if (breakpointMatched) {
        break;
      }
    }
    // If no breakpoint matched use Medium-Layout
    if ( breakpointMatched === null ) {
      breakpointMatched = breakpoints[ 2 ];
    }
    return breakpointMatched;
  }

}
