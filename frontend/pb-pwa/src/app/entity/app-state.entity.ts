import { ContractInterface } from './../module/pb-api/model/interfaces.export';
import { ConfigConnection } from './config-connection.entity';
/**
 * Available environment-states
 */
export enum AppEnv {
  /**
   * Initial state - application is disconnected,
   * only restores data from browser cache
   */
  Offline = 1,
  /**
   * Application uses Offline-Mocks to simulate
   * a live environment - should be used for
   * testing/during development
   */
  Offline_Test = 2,
  /**
   * Application is connected to live
   * testing-environment
   */
  Live_Test = 3,
  /**
   * Application is connected to live
   * production-environment
   */
  Live_Prod = 4,
  /**
   * Application fell back to backup-server
   * of live production-environment, because
   * producation-environment wasn't reachable
   */
  Live_Backup = 5,
}
/**
 * Available connections-states used to display
 * applications loading-state
 */
export enum ConnectionState {
  /**
   * Initial state - application is offline
   * and resting
   */
  Offline = 1,
  /**
   * Connection was offline and is performing first request
   * to the backend data-service
   */
  Connecting = 2,
  /**
   * Application is connected to data-service
   */
  Online = 3,
  /**
   * Application experienced problems with data-service
   * connection - like production-server doesn't respond
   * and data-service switched to backup-connection
   */
  Warning = 4,
  /**
   * Application cannot fetch data from backend, because
   * of errors or unresponsive/unavailable server
   */
  Error = 5
}
/**
 * Enum for defining available request-states
 */
export enum RequestState {
  /**
   * There is an active request to backend data-service
   */
  Active = 1,
  /**
   * There is currently no active request to backend data-service
   */
  Inactive = 2
}
/**
 * Entity to hold the current-state of bar-status component
 */
export class PowerbotStateEntity {
  constructor(
    /**
   * Flags in which environment the application is currently active in
   */
    public appEnv: AppEnv = AppEnv.Offline,
   /**
    * Contains the currently selected contract-entity
    */
    public selectedContract: null | ContractInterface = null,
    /**
     * Holds name of currently used market-environment
     */
    public selectedMarket: null | string = null,
    /**
     * Flags if user is allowed to by-pass the connection route-guard
     */
    public allowed: boolean = false,
    /**
     * Contains currently configured connection-configuration
     */
    public connection: null | ConfigConnection = null,
    /**
     * Flags the state of the application current backend connection
     */
    public connectionState: ConnectionState = ConnectionState.Offline,
    /**
     * Flags if the application has active requests
     */
    public requestState: RequestState = RequestState.Inactive,
  ) { }
}
