import { translation_key } from './translation.utils';
/**
 * Translation-Key File for common texts and labels used within this
 * application.
 */
export class TextTranslation {
  /** Error-Message to be displayed when application cannot reach external-services */
  public static readonly PB_VALIDATION_ERROR_NO_INTERNET_CONNECTION = translation_key('pb_validation_error_no_internet_connection');
  /**
   * CONSTRUCTOR
   */
  constructor() { }
}
