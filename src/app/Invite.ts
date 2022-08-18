export interface Invite{
    id?: number,
    eventID?: number,  
    fromUserID?: number,
    fromUsername?: string,
    toUserID?: number,
    toUsername?: string,
    eventDate: Date,  
    eventTitle: string,
    eventDescrip: string
}