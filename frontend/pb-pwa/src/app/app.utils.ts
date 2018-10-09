/**
 * Marker function used to mark translation-keys in code
 * @param str
 */
export function _(str: string) {
  return str;
}
/** Utility function used to get time from date-object
 * and return 0 for undefined dates
 */
export function sortArrayByTime( a: Date, b: Date) {
  const getTime = function ( date ?: Date ) : number {
    return date ? date.getTime() : 0;
  };
  return getTime(a) - getTime(b);
}
