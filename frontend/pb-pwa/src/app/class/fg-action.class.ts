// import {
//   IFgActionEntityInterface,
// } from '../../../../../fg-shared/interface/fg-interfaces.export';
import { FgEvent } from './fg-class.export';

/**
* FgAction -
* This class is representing a certain interaction that the user
* can perform on the containing component
*/
export class FgAction /* implements IFgActionEntityInterface */ {
  /**
  * CONSTRUCTOR
  */
  constructor(
    /**
    * The event to dispatch on action activation
    */
    public event: FgEvent,
    /**
     * TODO
     */
    public color: string,
    /**
     * The label that should be displayed for this action
     * TODO: Replace this with an FgContent-Instance
     */
    public label: string | Function,
    /**
    * Holds icon-key values to display icons using
    * mat-icon component
    * TODO: Implement any as an object containing multiple
    * 'state'-keys and the icon-name to be displayed for
    * this state
    */
    public icon: string | Function,
    /**
     * Holds the keyboard-navigation action-shortcut key-values/combinations
     * to use to activate this action
     */
    public key?: string,
    /**
    * Holds animatin property-object to apply animations on action
    * state-changes
    * TODO: Implement any as an object containing multiple
    * 'state'-keys and the animation-properties to be displayed for
    * this state
    */
    public animation?: any,
    /**
    * Holds reference to the function that should be performed to
    * validate if action should be disabled
    */
    public disabled?: (any) => boolean,
  ) {}
}
