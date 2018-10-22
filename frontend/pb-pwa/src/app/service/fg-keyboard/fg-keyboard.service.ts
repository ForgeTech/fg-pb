import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FgComponentBaseComponent } from 'src/app/component/fg-component-base/fg-component-base.component';
import { GlobalRef } from './../../module/fg-global-scope/fg-global-refs.class';

@Injectable({
  providedIn: 'root'
})
export class FgKeyboardService {
  /**
   * Observable returning true if typing started
   */
  public inputStarted$: Subject<boolean> = new Subject();
  /**
   * Observable returning true if there is no key_up-event is
   * received after defined delay
   */
  public inputEnded$: Subject<boolean> = new Subject();
  /**
   * CONSTRUCTOR
   */
  constructor(
    /**
     * Reference to global namespace, lk
     * like window - in browser, or global - in nodejs
     */
    private $global: GlobalRef
  ) {}

}
