import { Injectable, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher, BreakpointState } from '@angular/cdk/layout';
import { BreakpointEnum } from './../../enum/enum.export';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FgGraphqlService } from 'src/app/module/fg-graphql/service/fg-graphql/fg-graphql.service';
/**
 * FgBreakpointSevice -
 * Service providing media-query functionality,
 * based on angular-material cdk to importing application
 */
@Injectable()
export class FgBreakpointService {
  /**
   * Array to contain the Media-Queries to match.
   * Contains all angular-material breakpoints by
   * default
   */
  protected mediaQueries: Array<any> = [
    Breakpoints.Handset,
    Breakpoints.HandsetLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.Large,
    Breakpoints.Medium,
    Breakpoints.Small,
    Breakpoints.Tablet,
    Breakpoints.TabletLandscape,
    Breakpoints.TabletPortrait,
    Breakpoints.Web,
    Breakpoints.WebLandscape,
    Breakpoints.WebPortrait
  ];
  /** Observable Subject streamin enum-values
   * of active breakpoints */
  public matchedBreakpoints$: Subject<string[]> = new Subject();
  /** The currently matched breakpoints */
  public matchedBreakpoints: string[];
  /**
   * Return breakpoint-observer result for matching
   * angular-material breakpoints
   */
  private breakpointObserver$: Observable<BreakpointState>;
  /**
   * Constructor
   */
  constructor(
    /**
     * Provides access to angular-material cdk breakpoint-observer
     */
    protected $breakpointObserver: BreakpointObserver,
    /**
     * Provides access to angular-material cdk mediaMatcher-wrapper
     */
    // protected $mediaMatcher: MediaMatcher,
    /**
     * Provides access to apllo graphql-service
     */
    // protected $apollo: FgGraphqlService
  ) {
    // Initialize breakpoint-observable for all angular-material
    // default breakpoints
    this.breakpointObserver$ = $breakpointObserver.observe(
      this.mediaQueries
    );
    // Listen to breakpoint-observable and translate state into
    // BreakpointEnums
    this.breakpointObserver$.subscribe( breakpointState => {
      const breakpointEnums: Array<string> = this.getBreakpointEnumsFromBreakpointState( breakpointState );
      this.matchedBreakpoints = breakpointEnums;
      this.matchedBreakpoints$.next( breakpointEnums );
    });
  }
    /**
   * Methode to return a Breakpoint-Matecher observable for the passed media-query strings
   * @param mediaQueryStrings Either a single or multiple media-query strings
   */
  public getBreakpointObservable( mediaQueryStrings: string | Array<string> ): Observable<BreakpointState> {
    let matchedBreakpoints: Array<string> = [];
    if ( mediaQueryStrings.length ) {
      matchedBreakpoints =  mediaQueryStrings as Array<string>;
    } else {
      matchedBreakpoints.push( mediaQueryStrings as string );
    }
    return this.$breakpointObserver.observe( matchedBreakpoints );
  }
  /**
   * Methode to return array of matched BreakpointEnums
   */
  protected getBreakpointEnumsFromBreakpointState( breakpointState: BreakpointState ): Array<string> {
    // tslint:disable-next-line prefer-const
    let matchedBreakpointEnums: Array<string> = [];
    const breakpointKeys: Array<string> = Object.keys(breakpointState.breakpoints);
    for ( let i = 0; i < breakpointKeys.length; i++ ) {
      // tslint:disable-next-line prefer-const
      let breakpointKey: string = breakpointKeys[ i ];
      // if breapoint matching state is true set according breakpoint-key
      if (breakpointState.breakpoints[ breakpointKey ] === true) {
        switch ( breakpointKey ) {
          case Breakpoints.Handset:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.HANDSET ] );
            break;
          case Breakpoints.HandsetLandscape:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.HANDSET_LANDSCAPE ] );
            break;
          case Breakpoints.HandsetPortrait:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.HANDSET_PORTRAIT ] );
            break;
          case Breakpoints.Large:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.LARGE ] );
            break;
          case Breakpoints.Medium:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.MEDIUM ] );
            break;
          case Breakpoints.Small:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.SMALL ] );
            break;
          case Breakpoints.Tablet:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.TABLET ] );
            break;
          case Breakpoints.TabletLandscape:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.TABLET_LANSCAPE ] );
            break;
          case Breakpoints.TabletPortrait:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.TABLET_PORTRAIT ] );
            break;
          case Breakpoints.Web:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.WEB ] );
            break;
          case Breakpoints.WebLandscape:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.WEB_LANSCAPE ] );
            break;
          case Breakpoints.WebPortrait:
            matchedBreakpointEnums.push( BreakpointEnum[ BreakpointEnum.WEB_PORTRAIT ] );
            break;
        }
      }
    }
    return matchedBreakpointEnums;
  }
}
