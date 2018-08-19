import { Injectable } from '@angular/core';
import { FgEventService } from './../../service/fg-event/fg-event.service';
import { NGXLogger as FgLogService } from 'ngx-logger';
// import { FgGestureService } from './../../service/fg-gesture/fg-gesture.service';
// import { FgKeyboardService } from './../../service/fg-keyboard/fg-keyboard.service';
// import { FgZindexService } from './../../service/fg-zindex/fg-zindex.service';
// import { IFgStateEntityInterface } from '../../../../../../fg-shared/interface/fg-interfaces.export';
  /**
  * FgComponentBaseService -
  * Service provides forge-components with all commonly needed
  * functionality
  */
@Injectable()
export class FgComponentBaseService {
  /**
  * Gives access to FgLogService
  */
  public $log: FgLogService;
  /**
  * Gives access to FgEventService-methodes
  */
  public $event: FgEventService;
  /**
  * Gives access to FgGestureService-methodes
  */
  // public $gesture: FgGestureService;
  /**
  * Gives access to FgKeyboardService-methodes
  */
  // public $keyboard: FgKeyboardService;
  /**
  * Gives access to FgZindexService-methodes
  */
  // public $zindex: FgZindexService;
  /**
  * CONSTRUCTOR
  */
  constructor (
    $log: FgLogService,
    $event: FgEventService,
    // $gesture: FgGestureService,
    // $keyboard: FgKeyboardService,
    // $zindex: FgZindexService
  ) {

    this.$log = $log;
    this.$event = $event;
    // this.$gesture = $gesture;
    // this.$keyboard = $keyboard;
    // this.$zindex = $zindex;
  }
//   /**
//    * Methode to be used with component-base create-action,
//    * defining when to disable the action in fgAction-component
//    */
//   public disableCreateAction( entity: IFgStateEntityInterface ): boolean {
//     return entity.createable;
//   }
//   /**
//    * Methode to be used with component-base editable-action
//    * defining when to disable the action in fgAction-component
//    */
//   public disableEditableAction( entity: IFgStateEntityInterface ): boolean {
//     return entity.editable;
//   }
//   /**
//    * Methode to be used with component-base lock-action
//    * defining when to disable the action in fgAction-component
//    */
//   public disableLockAction( entity: IFgStateEntityInterface ): boolean {
//     return entity.lockable;
//   }
//   /**
//    * Methode to be used with component-base delete-action
//    * defining when to disable the action in fgAction-component
//    */
//   public disableDeleteAction( entity: IFgStateEntityInterface ): boolean {
//     return entity.deleteable;
//   }
//   /**
//    * Methode to be used with component-base export-action
//    * defining when to disable the action in fgAction-component
//    */
//   public disableExportAction( entity: IFgStateEntityInterface ): boolean {
//     return entity.exportable;
//   }
//   /**
//    * Methode to be used with component-base print-action
//    * defining when to disable the action in fgAction-component
//    */
//   public disablePrintAction( entity: IFgStateEntityInterface ): boolean {
//     return entity.printable;
//   }
//   /**
//    * This methode takes an array an index and returns the according object.
//    * If index is bigger then passed array - first object in the array is returned
//    */
//   public rotateArrayProperties(array: any[], index: number = 0): any {
//     let valueToReturn: any;
//     if ( array ) {
//       // If passed index-value is smaller then zero return last
//       // item in array
//       if ( index < 0 ) {
//         index = array.length - 1;
//         valueToReturn = array[ index ];
//       } else if ( index >= array.length) {
//         // If passed index is bigger then count of array-items
//         // return first array-item
//         index = 0;
//         valueToReturn = array[0];
//       } else {
//         valueToReturn = array[index];
//       }
//     }
//     return {
//       value: valueToReturn,
//       index: index
//     };
//   }
}
