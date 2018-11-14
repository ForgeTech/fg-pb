export interface MessageEntityInterface {
    messageId?: string;
    api_timestamp?: Date;
    category?: Message.CategoryEnum;
    message_class?: string;
    content_type?: string;
    correlation_id?: string;
    direction?: Message.DirectionEnum;
    groupId?: string;
    group_sequence?: string;
    content?: any;
}
export namespace MessageEntityInterface {
    export type CategoryEnum = 'INQUIRY_REQUEST' | 'MANAGEMENT_REQUEST' | 'RESPONSE' | 'BROADCAST';
    export const CategoryEnum = {
        INQUIRYREQUEST: 'INQUIRY_REQUEST' as CategoryEnum,
        MANAGEMENTREQUEST: 'MANAGEMENT_REQUEST' as CategoryEnum,
        RESPONSE: 'RESPONSE' as CategoryEnum,
        BROADCAST: 'BROADCAST' as CategoryEnum
    };
    export type DirectionEnum = 'IN' | 'OUT';
    export const DirectionEnum = {
        IN: 'IN' as DirectionEnum,
        OUT: 'OUT' as DirectionEnum
    };
}
