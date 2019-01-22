import { Pipe, PipeTransform } from '@angular/core';
import { PowerBotEntity } from '../../entity/entity.export';
import { TradeEntityInterface } from './../../interface/interface.export';
/**
 * Pipe for transforming PowerBot trade-object to trade-side value
 */
@Pipe({
  name: 'pbSidePipe'
})
export class PbSidePipe implements PipeTransform {
  /**
   * Transform trades data-row into side-value
   * @param value Datatable row trades-object instance
   * @param args (optional) args are not used in this pipe
   */
  transform( value: TradeEntityInterface, args?: any ): string {
    let side = '';
    if ( value.buy && value.sell ) {
      side = 'INT';
    } else if ( value.buy ) {
      side = 'BUY';
    } else if ( value.sell ) {
      side = 'SELL';
    }
    return side;
  }
}
