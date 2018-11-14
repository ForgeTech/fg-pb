export interface LogEntityInterface {
    /**
     * The unique id of the log entry
     */
    readonly id?: string;
    /**
     * The timestamp when the powerbot trading API has received the log entry. UTC timezone is used.
     */
    readonly received?: Date;
    /**
     * The content of your log entry
     */
    text: string;
    /**
     * Should be set to the time (UTC) when the log entry was emitted by your system
     */
    as_of: Date;
    /**
     * An optional category of the log entry
     */
    category?: string;
    /**
     * The severity of the log entry
     */
    severity?: LogEntityInterface.SeverityEnum;
}
export namespace LogEntityInterface {
    export type SeverityEnum = 'LOW' | 'MED' | 'HIG' | 'ERR' | 'URG';
    export const SeverityEnum = {
        LOW: 'LOW' as SeverityEnum,
        MED: 'MED' as SeverityEnum,
        HIG: 'HIG' as SeverityEnum,
        ERR: 'ERR' as SeverityEnum,
        URG: 'URG' as SeverityEnum
    };
}
