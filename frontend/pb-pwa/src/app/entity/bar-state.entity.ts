/**
 * Enum of available bar-status states
 */
export enum BarStateEnum {
  Disabled = 1,
  Loading = 2,
  Offline = 3,
  Online = 4,
  Warning = 5,
  Error = 6
}
/**
 * Entity to hold the current-state of bar-status component
 */
export class BarStateEntity {
  constructor(
    public appState: BarStateEnum = BarStateEnum.Disabled,
    public connectionState: BarStateEnum = BarStateEnum.Disabled,
    public marketState: BarStateEnum = BarStateEnum.Disabled,
  ) { }
}
