/**
 * Interface for passing graph-data to ngx-graph linear graph-component
 */
export interface GraphDataInterface {
  name ?: string,
    series: {
    name ?: string,
      value: number
  } []
}
