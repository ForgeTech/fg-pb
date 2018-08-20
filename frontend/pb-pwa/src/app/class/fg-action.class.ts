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
  * The event to dispatch on action activation
  */
  event: FgEvent;
  /**
  * Holds icon-key values to display icons using
  * mat-icon component
  * TODO: Implement any as an object containing multiple
  * 'state'-keys and the icon-name to be displayed for
  * this state
  */
  icon: string | any;
  /**
   * TODO
   */
  color: string;
  /**
  * Holds animatin property-object to apply animations on action
  * state-changes
  * TODO: Implement any as an object containing multiple
  * 'state'-keys and the animation-properties to be displayed for
  * this state
  */
  animation: any;
  /**
  * The label that should be displayed for this action
  * TODO: Replace this with an FgContent-Instance
  */
  label: string;
  /**
  * Holds the keyboard-navigation action-shortcut key-values/combinations
  * to use to activate this action
  */
  key: string;
  /**
  * Holds reference to the function that should be performed to
  * validate if action should be disabled
  */
  disabled: (any) => boolean;

  /**
  * CONSTRUCTOR
  */
  constructor(
    event: FgEvent,
    color: string,
    label: string,
    icon: string | any,
    key: string = 'none',
    animation: any = 'none',
    disabled = (x => true),
  ) {
    this.icon = icon;
    this.color = color;
    this.label = label;
    this.event = event;
    this.key = key;
    this.animation = animation;
    this.disabled = disabled;
  }
}
