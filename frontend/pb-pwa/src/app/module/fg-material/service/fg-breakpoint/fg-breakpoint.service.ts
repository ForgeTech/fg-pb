import { Injectable, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher, BreakpointState } from '@angular/cdk/layout';
import { BreakpointEnum } from './../../enum/enum.export';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  public breakpointsEnum$: Subject<string[]> = new BehaviorSubject( [ BreakpointEnum[ BreakpointEnum.INITIAL] ] );
  /**
   * Return breakpoint-observer result for matching
   * angular-material breakpoints
   */
  public breakpoint$: Observable<BreakpointState>;
  /**
   * Constructor
   */
  constructor(
    protected $breakpointObserver: BreakpointObserver,
    protected $mediaMatcher: MediaMatcher
  ) {
    this.breakpoint$ = $breakpointObserver.observe(
      this.mediaQueries
    )
    .pipe(
      debounceTime( 25 )
    );
    this.breakpoint$.subscribe( breakpointState => {
      console.log('BreakpointState');
      console.log( breakpointState );
      this.breakpointsEnum$.next( this.getBreakpointEnumsFromBreakpointState( breakpointState ) );
    });
    this.breakpointsEnum$.subscribe( result => {
      console.log('BreakpointEnums');
      console.log( result );
    });
  }
    /**
   * Methode to return a Breakpoint-Matecher observable for the passed media-query strings
   * @param mediaQueryStrings Either a single or multiple media-query strings
   */
  public getBreakpointObservable( mediaQueryStrings: string | Array<string> ): Observable<BreakpointState> {
    let matchedBreakpoints: Array<string> = [];
    if ( mediaQueryStrings.length ){
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
    let matchedBreakpointEnum: Array<string> = [];
    const breakpointKeys: Array<string> = Object.keys(breakpointState.breakpoints);
    for( var i = 0; i < breakpointKeys.length; i++ ) {
      let breakpointKey: string = breakpointKeys[ i ];

      // if breapoint matching state is true set according enum-key
      if (breakpointState.breakpoints[ breakpointKey ] === true) {
        switch ( breakpointKey ) {
          case Breakpoints.Handset:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.HANDSET ] );
            break;
          case Breakpoints.HandsetLandscape:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.HANDSET_LANDSCAPE ] );
            break;
          case Breakpoints.HandsetPortrait:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.HANDSET_PORTRAIT ] );
            break;
          case Breakpoints.Large:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.LARGE ] );
            break;
          case Breakpoints.Medium:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.MEDIUM ] );
            break;
          case Breakpoints.Small:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.SMALL ] );
            break;
          case Breakpoints.Tablet:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.TABLET ] );
            break;
          case Breakpoints.TabletLandscape:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.TABLET_LANSCAPE ] );
            break;
          case Breakpoints.TabletPortrait:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.TABLET_PORTRAIT ] );
            break;
          case Breakpoints.Web:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.WEB ] );
            break;
          case Breakpoints.WebLandscape:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.WEB_LANSCAPE ] );
            break;
          case Breakpoints.WebPortrait:
            matchedBreakpointEnum.push( BreakpointEnum[ BreakpointEnum.WEB_PORTRAIT ] );
            break;
        }
      }
    }
    return matchedBreakpointEnum;
  }
}
