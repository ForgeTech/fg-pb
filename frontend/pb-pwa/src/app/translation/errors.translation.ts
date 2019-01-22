import { translation_key } from './translation.utils';
/**
 * Translation-Key File for Error-Messanges used within this
 * application.
 */
export class ErrorTranslation {
  /** Error-Message to be displayed when application cannot reach external-services */
  public static readonly VALIDATION_ERROR_NO_INTERNET_CONNECTION = translation_key( 'pb_validation_error_no_internet_connection' );
  /** Error-Message to be displayed when configured backend-url doesn't respond correctly */
  public static readonly VALIDATION_ERROR_INVALID_API_URL = translation_key( 'pb_validation_error_invalid_api_url' );
  /** Error-Message to be displayed when configured api-key doesn't work on configured backend-url */
  public static readonly VALIDATION_ERROR_INVALID_API_KEY = translation_key( 'pb_validation_error_invalid_api_key' );
  /** Error-Message to be used when configured url doesn't match https-pattern */
  public static readonly VALIDATION_ERROR_NO_HTTPS_URL = translation_key( 'pb_validation_error_no_https_url' );
  /** Error-Message to be used when production and backup url are the same */
  public static readonly VALIDATION_ERROR_MATCHING_URLS = translation_key( 'pb_validation_error_matching_urls' );
  /** Error-Message to be used when field is required to finish form */
  public static readonly VALIDATION_ERROR_FIELD_REQUIRED = translation_key( 'pb_validation_error_field_required' );
  /**
   * CONSTRUCTOR
   */
  constructor() {}
}
